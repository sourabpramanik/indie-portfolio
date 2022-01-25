import React, { useEffect } from "react";
import MastHead from "./components/mastHead";
import gsap from "gsap";

function Home() {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".line", 1, {
      opacity: 0,
    });
  }, []);
  return (
    <>
      <MastHead />
    </>
  );
}

export default Home;
