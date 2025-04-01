import "@/styles/globals.css";
import { UserContext } from "@/components/form_login";
import Nav from "@/components/Nav";
import styles from "@/styles/Page.module.css";

export default function App({ Component, pageProps }) {
  return (
    <UserContext>
      <Nav />
      <div className={styles.wrapper}>
        <Component {...pageProps} />
      </div>
    </UserContext>
  );
}
