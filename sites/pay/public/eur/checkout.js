const settings = {
  stripe: {
    publishableKey: {
      live: "pk_live_51OT1kSCQmQapaRqASMlepG9OaANHdmz1ARPZKinNCyEBLypFcYZk5J4xvdTJcvUMzpDHWm9Vpm5smYXWedwUS3Or00znNFGuaU",
      test: "pk_test_ucSTeAAtkSXVEg713ir40UhX",
    }
  }
}
const stripe = Stripe(settings.stripe.publishableKey.live)

let elements
let paymentIntentID

createPaymentIntent()
checkStatus()

document
  .querySelector("#payment-form")
  .addEventListener("submit", handleSubmit)

function getAmount() {
  return new Number(document.getElementById("Field-amountInput").value)
}

function getAuthCode() {
  return new Number(document.getElementById("Field-authorizationCodeInput").value)
}

// Fetches a payment intent and captures the client secret
async function createPaymentIntent() {
  console.log("createPaymentIntent")

  const response = await fetch("/.netlify/functions/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: getAmount(),
      authorizationCode: getAuthCode(),
      currency: 'eur',
    }),
  })
  const payload = await response.json()
  console.log("payload:", payload)

  paymentIntentID = payload.id

  const appearance = {
    theme: "stripe",
  }
  elements = stripe.elements({
    appearance,
    clientSecret: payload.client_secret,
  })

  const paymentElement = elements.create("payment")
  paymentElement.mount("#payment-element")
}

// This happens after an onclick() event
async function updatePaymentIntent() {
  return fetch("/.netlify/functions/update-payment-intent", {
    method: "POST",
    body: JSON.stringify({
      paymentIntentID: paymentIntentID,
      authorizationCode: getAuthCode(),
      amount: getAmount(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
}

async function handleSubmit(e) {
  e.preventDefault()
  setLoading(true)

  // update payment intent to ensure amount is correct
  await updatePaymentIntent()

  // confirm payment with stripe
  const payload = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: String(window.location),
    },
  })

  console.log("payload", payload)

  const error = payload.error

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  if (error.type === "card_error" || error.type === "validation_error") {
    showMessage(error.message)
  } else {
    showMessage("An unexpected error occurred.")
  }

  setLoading(false)
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  )

  if (!clientSecret) {
    return
  }

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)

  switch (paymentIntent.status) {
    case "succeeded":
      showMessage("Payment succeeded!")
      break
    case "processing":
      showMessage("Your payment is processing.")
      break
    case "requires_payment_method":
      showMessage("Your payment was not successful, please try again.")
      break
    default:
      showMessage("Something went wrong.")
      break
  }
}

// ------- UI helpers -------

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message")

  messageContainer.classList.remove("hidden")
  messageContainer.textContent = messageText

  setTimeout(function () {
    messageContainer.classList.add("hidden")
    messageText.textContent = ""
  }, 4000)
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true
    document.querySelector("#spinner").classList.remove("hidden")
    document.querySelector("#button-text").classList.add("hidden")
  } else {
    document.querySelector("#submit").disabled = false
    document.querySelector("#spinner").classList.add("hidden")
    document.querySelector("#button-text").classList.remove("hidden")
  }
}
