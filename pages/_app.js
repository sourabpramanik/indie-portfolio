import "../styles/globals.css";
import Header from "./components/header";
import CustomCursor from "./components//customCursor";
import { GlobalProvider } from "./context/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <CustomCursor />
      <Header />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
