import UserLayout from "@/components/layout/userlayout";
import { Toaster } from "sonner";

function HomePage() {
  return (
    <section>
      <Toaster position="top-right"/>
      <UserLayout />
    </section>
  )
}

export default HomePage;