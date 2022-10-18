import "../styles/globals.css";
import Header from "../components/header";
import CustomCursor from "../components//customCursor";
import GlobalProvider from "../context/globalContext";
import NavPage from "../components/navPage";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <GlobalProvider>
        <CustomCursor />
        <NavPage />
        <Header />
        <Component {...pageProps} />
      </GlobalProvider>
    </div>
  );
}

export default MyApp;
