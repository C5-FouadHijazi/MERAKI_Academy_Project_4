import React from "react"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./Paymentform"
import "./Payment.css"

const PUBLIC_KEY = "pk_test_51L0vf6K1A4weZECAuYQzMV6Fj623ECgaBuDyDSvOKJuslDO9VQWdOx18HjBTcKFRyMZtgQnIM3vXakJut3V8ldy200p5TLJpPE"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}

