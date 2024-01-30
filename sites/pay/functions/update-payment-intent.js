const settings = require("./settings")
const stripe = require("stripe")(settings.stripe.secretKey.live)

function toCents(amount) {
  return Math.ceil(amount * 100)
}

exports.handler = async function (req, context) {
  console.log("update-payment-intent", req)

  const { amount, authorizationCode, paymentIntentID } = JSON.parse(req.body)

  const paymentIntent = await stripe.paymentIntents.update(
    paymentIntentID, 
    {
      amount: toCents(amount),
      metadata: {
        authorizationCode: authorizationCode,
      },
    }
  )

  console.log("paymentIntent", paymentIntent)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "ok" })
  }
}
