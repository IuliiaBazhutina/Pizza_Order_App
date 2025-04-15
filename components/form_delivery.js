import { useState } from 'react';
import styles from "@/styles/Delivery.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Delivery() {
  const [deliveryOption, setDeliveryOption] = useState('');
  const [address, setAddress] = useState({ streetAddress: "", city: "", postalCode: "" });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleChange = (event) => {
    setDeliveryOption(event.target.value);
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if ((deliveryOption === "Pick Up") || (deliveryOption === "Home Delivery" && address.streetAddress && address.city && address.postalCode)) {
      setIsOrderPlaced(true);
      setMessage("");
      
      let propData = "";
      if (deliveryOption === "Pick Up") {
        propData = "You chose Pick Up. Your pizza will be ready in 30 min.";
      } 
      else if (deliveryOption === "Home Delivery") {
        propData = `You chose Home Delivery. Your address: ${address.streetAddress}, ${address.city}, ${address.postalCode}`;
      }

      router.push({
        pathname: '/review',
        query: { data: propData }
      });

    }
    else {
      setMessage("Please fill in all the fields");
    }

  };


  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            value="Home Delivery"
            checked={deliveryOption === "Home Delivery"}
            onChange={handleChange}
          />
          <label>Home Delivery</label>
        </div>

        <div>
          <input
            type="radio"
            value="Pick Up"
            checked={deliveryOption === "Pick Up"}
            onChange={handleChange}
          />
          <label>Pick Up</label>
        </div>


        {deliveryOption === "Pick Up" && <div>
          <p>Your order will be ready in 30 min.</p>
        </div>}

        {deliveryOption === "Home Delivery" &&
          <>
            <label>Street address:</label>
            <input type="text" name="streetAddress" value={address.streetAddress} onChange={handleInputChange} />
            <label>City:</label>
            <input type="text" name="city" value={address.city} onChange={handleInputChange} />
            <label>Postal code:</label>
            <input type="text" name="postalCode" value={address.postalCode} onChange={handleInputChange} />
          </>}

        {deliveryOption && <button type="submit">Place order</button>}
      </form>
      <p>{message}</p>
    </div>

  );
}