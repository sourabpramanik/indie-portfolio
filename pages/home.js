import React from "react";
import MastHead from "./components/mastHead";
import BrandingSection from "./components/branding";
import WorkArea from "./components/workArea";
import gsap from "gsap";

function Home() {
  return (
    <>
      <MastHead />
      <BrandingSection />
      <WorkArea />
    </>
  );
}

export default Home;
