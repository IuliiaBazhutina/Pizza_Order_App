import "@/styles/globals.css";
import Nav from "@/components/Nav";
import styles from "@/styles/Page.module.css";
import { PizzaProvider } from "@/components/PizzaContext";
import { UserContextProvider } from "@/components/UserContext";
import { BusinessHoursProvider } from "@/components/time";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <BusinessHoursProvider>
        <PizzaProvider>
          <Nav />
          <div className={styles.wrapper}>
            <Component {...pageProps} />
          </div>
        </PizzaProvider>
      </BusinessHoursProvider>
    </UserContextProvider>
  );
}
