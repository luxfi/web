const settings = require("./settings")
const stripe = require("stripe")(settings.stripe.secretKey.live)

function toCents(amount) {
  return Math.ceil(amount * 100)
}

exports.handler = async function (req, context) {
  console.log("create-payment-intent", req)

  const { authorizationCode, amount, currency } = JSON.parse(req.body)

  // Create a PaymentIntent with the order amount and currency
  const payment = await stripe.paymentIntents.create({
    amount:   toCents(amount),
    currency: currency,
    metadata: { authorizationCode: authorizationCode },
    // payment_method_types: ['card'],
    automatic_payment_methods: {
      enabled: true,
    },
  })

  console.log("payment", payment)

  return {
    statusCode: 200,
    body: JSON.stringify(payment)
  }
}
