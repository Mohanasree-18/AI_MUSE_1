import axios from "axios";

//stripe payment
export const handleFreeSubscriptionAPI = async () => {
  const response = await axios.post(
    `${window.location.origin}/api/v1/stripe/free-plan`,
    {},
    {
      withCredentials: true,
    }
  );

  return response?.data;
};

//=======Stripe  Payment intent=====

export const createStripePaymentIntentAPI = async (payment) => {
  const response = await axios.post(
    `${window.location.origin}/api/v1/stripe/checkout`,
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Verify  Payment =====

export const verifyPaymentAPI = async (paymentId) => {
  const response = await axios.post(
    `${window.location.origin}/api/v1/stripe/verify-payment/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
