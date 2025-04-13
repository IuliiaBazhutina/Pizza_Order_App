import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePizza } from '@/components/PizzaContext';
import Delivery from '@/components/form_delivery'

export default function Checkout() {

  const router = useRouter();
  const { hasCrust } = usePizza();

  useEffect(() => {
    if (!hasCrust()) {
      router.push('/ingredients');
    }
  }, [hasCrust, router]);

  return (
    <>
      <div>
      <h2 style={{ marginBottom: "10px" }}>Choose a delivery option:</h2>
          
      </div>
    <Delivery/>
    </>
  );
}
