import { useParams, useSearchParams } from "react-router-dom";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createStripePaymentIntentAPI } from "../../apis/stripePayment/stripePayment";
import StatusMessage from "../Alert/StatusMessage";
import React from "react";

const CheckoutForm = () => {
  //get the payload
  const params = useParams();

  const [SearchParams] = useSearchParams();
  const plan = params.plan;
  const amount = SearchParams.get("amount");
  const mutation = useMutation({
    mutationFn: createStripePaymentIntentAPI,
  });
  //stripe configuration
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (elements === null) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    }

    try {
      //prepare our data for payment
      const data = {
        amount,
        plan,
      };
      //make the http req
      mutation.mutateAsync(data);
      console.log("MUTATION IS :", mutation);
      const response = await stripe.confirmPayment({
        elements,
        clientSecret: mutation.data?.clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
      });

      console.log("response OBJECT RECEIVED HERE : ", response);
      if (response) {
        setErrorMessage(response?.message);
      }
    } catch (error) {
      setErrorMessage(error?.message);
    }
  };

  return (
    <div className="bg-gray-900 h-screen -mt-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 mx-auto my-4 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <PaymentElement />
        </div>
        {mutation?.isPending && (
          <StatusMessage type={"loading"} message={"Processing please wait"} />
        )}
        {mutation?.isSuccess && (
          <StatusMessage type={"success"} message={"Payment succesful"} />
        )}{" "}
        {mutation?.isError && (
          <StatusMessage
            type={"error"}
            message={mutation?.error?.response?.error}
          />
        )}
        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
