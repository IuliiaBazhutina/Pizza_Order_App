import "@/styles/globals.css";
import { UserContext } from "@/components/form_login";
import Nav from "@/components/Nav";
import styles from "@/styles/Page.module.css";
import { PizzaProvider } from "@/components/PizzaContext";
import { UserContextProvider } from "@/components/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <PizzaProvider>
        <Nav />
        <div className={styles.wrapper}>
          <Component {...pageProps} />
        </div>
      </PizzaProvider>
    </UserContextProvider>
  );
}
