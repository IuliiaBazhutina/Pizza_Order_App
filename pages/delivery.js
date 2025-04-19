import { useEffect } from "react";
import { useRouter } from "next/router";
import { usePizza } from "@/components/PizzaContext";
import Delivery from "@/components/form_delivery";
import OpenHours from "@/components/time";

export default function Checkout() {
  const router = useRouter();
  const { canOrder, hasCrust, isBusinessHours } = usePizza();

  useEffect(() => {
    if (!canOrder()) {
      if (!hasCrust) {
        // Redirect to ingredients if no crust is selected
        router.push("/ingredients");
      }
    }
  }, [canOrder, isBusinessHours, router]);

  return (
    <>
      <div>
        {!isBusinessHours && (
          <div style={{ color: "red", fontWeight: "bold", marginBottom: "20px" }}>
            Sorry, we are currently closed. Orders can only be placed during business hours (10 AM -
            11 PM).
            <OpenHours />
          </div>
        )}
      </div>
      {isBusinessHours && (
        <div>
          <h2>Choose a delivery option:</h2>
          <Delivery />
        </div>
      )}
    </>
  );
}
