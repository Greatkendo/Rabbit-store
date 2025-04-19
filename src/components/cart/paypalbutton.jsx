import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function PaypalButton ({amount, onSuccess, onError}) {
 return(
  <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, }}>
   <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => {
    return actions.order.create({
     purchase_units: [{amount: {value: amount}}]
    })
   }}
   onApprove={(data, actions) => {
    return actions.order.capture().then(onSuccess)
   }}
   onError={onError}/>
  </PayPalScriptProvider>
 );
};

export default PaypalButton;