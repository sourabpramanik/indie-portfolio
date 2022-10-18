import React, { useCallback } from "react";
import Link from "next/link";
import { useGlobalDispatchContext } from "../context/globalContext";
import gsap from "gsap";

function Header() {
  const dispatch = useGlobalDispatchContext();
  const tl = gsap.timeline();

  const toggleNav = useCallback(() => {
    tl.to(".full-width-navpage", -1, {
      css: {
        display: "block",
      },
    })
      .to("body", -1.5, {
        css: {
          overflow: "hidden",
        },
        ease: "power4.inOut",
        //stagger: 0.3,
      })
      .to(".navpage-block", 1, {
        css: {
          transform: "translate(0%, 0%)",
        },
        ease: "power4.inOut",
        stagger: 0.3,
      })
      .to(".nav-item", 0.8, {
        css: {
          opacity: "100%",
        },
        ease: "expo.inOut",
        stagger: 0.3,
      })
      .to(".expr-area", 0.8, {
        opacity: "100%",
        ease: "expo.inOut",
      })
      .to(".close-btn-link", 0.8, {
        css: {
          display: "block",
        },
        ease: "expo.inOut",
      })
      .to(".theme-dip-btn-link", 0.8, {
        css: {
          display: "block",
        },
        ease: "expo.inOut",
      });
  });

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <Link
          href="/"
          onMouseEnter={() => dispatch("hovered")}
          onMouseLeave={() => dispatch("pointer")}
          className="logo__wrapper"
        >
          INDIE.
        </Link>
        <div
          className="menu__wrapper"
          onMouseEnter={() => dispatch("hovered")}
          onMouseLeave={() => dispatch("pointer")}
          onClick={() => toggleNav()}
        ></div>
      </div>
    </div>
  );
}
export default Header;
