import "@/styles/globals.css";
import { UserContext } from "@/components/form_login";
import Nav from "@/components/Nav";
import styles from "@/styles/Page.module.css";
import { PizzaProvider } from "@/components/PizzaContext";

export default function App({ Component, pageProps }) {
  return (
    <PizzaProvider>
    
      <Nav />
      <div className={styles.wrapper}>
        <Component {...pageProps} />
      </div>
      
  </PizzaProvider>);
}
