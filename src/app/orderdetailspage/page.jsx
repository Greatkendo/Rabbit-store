'use client'
import { useParams } from "next/navigation";

function OrderDetailPage () {
 const {id} = useParams();
 return (
  <section>
   <h1>Order details</h1>
  </section>
 );
};

export default OrderDetailPage;