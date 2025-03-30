import "@/styles/globals.css";
import { UserContext } from "@/components/form_login";

export default function App({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>)
}
