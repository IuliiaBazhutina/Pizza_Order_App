import { createContext, useState } from "react";
import styles from "@/styles/Login.module.css";
import { useRouter } from 'next/router';

export const UserContext = createContext();

function LogIn({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const nameValidation = (name) => {
    if (name) {
      setName(name);
      setMessage("");
    } else {
      setMessage("Please enter your name");
    }
  };

  const emailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && emailRegex.test(email)) {
      setEmail(email);
      setMessage("");
    } else if (email == "") {
      setMessage("Please enter your email");
    } else {
      setMessage("Please enter valid email");
    }
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (name && email) {
      setIsLoggedIn(true);
      setMessage("");
      //document.getElementById("form").reset();
      router.push({
        pathname: '/ingredients'
      });

    } else if (!name) {
      setMessage("Please enter your name");
    } else {
      setMessage("Please enter your email");
    }
  };

  return (
    <div className={styles.wrapper}>
      {!isLoggedIn && (
        <div>
          <div style={{ marginBottom: "30px", width: "100%", textAlign: "center" }}>
            <h2 style={{ marginBottom: "10px" }}>Welcome to the Pizzeria</h2>
            <p>Please login to begin your order</p>
          </div>
          <div className={styles.login}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} id="form" className={styles.form}>
              <label>Name</label>
              <input type="text" onBlur={(e) => nameValidation(e.target.value)} />

              <label>Email</label>
              <input type="email" onBlur={(e) => emailValidation(e.target.value)} />

              <button type="submit">Log In</button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      )}
      {/* renders only if user is logged in */}
      {isLoggedIn && (
        <div className={styles.welcome}>
          <h2>Welcome, {name}!</h2>
          <button onClick={(e) => setIsLoggedIn(!isLoggedIn)}>Logout</button>
        </div>
      )}

      <UserContext.Provider value={{ name, email }}>{children}</UserContext.Provider>
    </div>
  );
}

export default LogIn;
