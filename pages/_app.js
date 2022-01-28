import "../styles/globals.css";
import Header from "./components/header";
import CustomCursor from "./components//customCursor";
import GlobalProvider from "./context/globalContext";
import NavPage from "./components/navPage";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MyApp({ Component, pageProps }) {
  const progressTrack = useRef();
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(progressTrack.current, {
    value: 100,
    ease: "none",
    scrollTrigger: { scrub: 0.3 },
  });
  return (
    <div className="app">
      <GlobalProvider>
        <progress ref={progressTrack} max="100" value="0"></progress>
        <CustomCursor />
        <NavPage />
        <Header />
        <Component {...pageProps} />
      </GlobalProvider>
    </div>
  );
}

export default MyApp;
