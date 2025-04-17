import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function PaypalButton ({amount, onSuccess, onError}) {
 return(
  <PayPalScriptProvider options={{ "client-id": "AWHhA4F6yIEPkEJgmh6gqCHm4Dbr8BPxb7bctzWEseALxywaljdYW80VNbAPhKKWyXM7_5ayi37l8oWO" }}>
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