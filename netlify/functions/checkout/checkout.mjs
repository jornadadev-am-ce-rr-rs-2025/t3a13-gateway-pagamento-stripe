import Stripe from "stripe"
// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
const STRIPE_KEY = process.env.STRIPE_KEY
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID
const SITE_URL = process.env.SITE_URL || "http://localhost:5173"

const stripe = new Stripe(STRIPE_KEY)

export default async () => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Apple Pencil - Generico"
            },
            unit_amount: 4500,
          },
          quantity: 1
        },
        {
          price: STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      success_url: `${SITE_URL}/sucesso`,
      cancel_url: `${SITE_URL}/error`
    })

    return new Response(JSON.stringify({ url: session.url }))

  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
