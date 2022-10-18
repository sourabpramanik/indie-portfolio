import React, { useCallback } from "react";
import gsap from "gsap";
import { useGlobalDispatchContext } from "../context/globalContext";
import Link from "next/link";

function NavPage() {
  const dispatch = useGlobalDispatchContext();
  const tl = gsap.timeline();

  const closeNav = useCallback(() => {
    tl.to(".nav-item", 0.8, {
      css: {
        opacity: "0",
      },
      ease: "circ.out",
      stagger: -0.3,
    })
      .to(".close-btn-link", 0.8, {
        css: {
          display: "none",
        },
        ease: "expo.inOut",
      })
      .to(".theme-dip-btn-link", 0.8, {
        css: {
          display: "none",
        },
        ease: "expo.inOut",
      })
      .to(".expr-area", 0.4, {
        opacity: 0,
        ease: "expo.inOut",
      })
      .to(".navpage-block", 1, {
        css: {
          transform: "translate(101%, 0%)",
        },
        ease: "power4.inOut",
        stagger: -0.3,
        delay: -1,
      })
      .to("body", 0.2, {
        css: {
          overflow: "unset",
        },
        ease: "power4.inOut",
        stagger: 0.3,
      })
      .to(".full-width-navpage", 0.2, {
        css: {
          display: "none",
        },
      });
    dispatch("pointer");
  });
  return (
    <div
      className="full-width-navpage"
      style={{ display: "none" }}
      onMouseEnter={() => dispatch("nav-body-hovered")}
      onMouseLeave={() => dispatch("pointer")}
    >
      <div className="navpage-block-container">
        <div
          className="navpage-block"
          style={{ transform: "translate(101%, 0%)" }}
        ></div>
        <div
          className="navpage-block"
          style={{ transform: "translate(101%, 0%)" }}
        ></div>
        <div
          className="navpage-block"
          style={{ transform: "translate(101%, 0%)" }}
        ></div>
      </div>
      <div
        className="navpage-container page__container fill-mode"
        style={{
          animationTimingFunction: "cubic-bezier(0.94, 0.22, 0.42, 0.83)",
        }}
      >
        <div className="navpage-content-flex">
          <nav>
            <ul className="nav-list">
              <li
                className="nav-item _item"
                style={{
                  opacity: "0%",
                }}
              >
                <div href="/" className="l-anim l-wrap">
                  <div className="item-shift">
                    <span
                      className="t-heading-500 l-target"
                      onMouseEnter={() => dispatch("video-hover")}
                      onMouseLeave={() => dispatch("nav-body-hovered")}
                    >
                      Home
                      <div className="line-indc"></div>
                    </span>
                  </div>
                </div>
              </li>
              <li
                className="nav-item _item"
                style={{
                  opacity: "0%",
                }}
              >
                <div>
                  <div className="item-shift">
                    <Link href="/about-us">
                      <a
                        className="t-heading-500 l-target"
                        onClick={() => closeNav()}
                        onMouseEnter={() => dispatch("nav-body-hovered")}
                        onMouseLeave={() => dispatch("nav-body-hovered")}
                      >
                        About me
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className="nav-item _item"
                style={{
                  opacity: "0%",
                }}
              >
                <div>
                  <div className="item-shift">
                    <span
                      className="t-heading-500 l-target"
                      onMouseEnter={() => dispatch("nav-body-hovered")}
                      onMouseLeave={() => dispatch("nav-body-hovered")}
                    >
                      Contact me
                      <div className="line-indc"></div>
                    </span>
                  </div>
                </div>
              </li>
              <li
                className="nav-item _item"
                style={{
                  opacity: "0%",
                }}
              >
                <div>
                  <div className="item-shift">
                    <span
                      className="t-heading-500 l-target"
                      onMouseEnter={() => dispatch("nav-body-hovered")}
                      onMouseLeave={() => dispatch("nav-body-hovered")}
                    >
                      Case Studies
                      <div className="line-indc"></div>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="expr-area">
          <div className="expr-wrapper">
            <h2 className="t-heading-200r">Indie Expression</h2>
            <p>
              Working as a solo designer and developer has created many channels
              for me to meet new clients, preserve long time partnerships,
              getting re-hired and sharing feedbacks are the great expression in
              the end.
            </p>
          </div>
        </div>
        <div className="navpage-close-area ">
          <div className="navpage-close-btn">
            <button
              onClick={() => closeNav()}
              className="t-paragraph close-btn-link"
              onMouseEnter={() => dispatch("nav-body-hovered")}
              onMouseLeave={() => dispatch("nav-body-hovered")}
              style={{ display: "none" }}
            >
              close
            </button>
          </div>
        </div>

        <div className="navpage-theme-dip-area ">
          <div className="navpage-theme-dip-btn">
            <button
              onClick={() => dispatch("expand")}
              className="t-paragraph theme-dip-btn-link"
              onMouseEnter={() => dispatch("nav-body-hovered")}
              onMouseLeave={() => dispatch("nav-body-hovered")}
              style={{ display: "none" }}
            >
              drop dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavPage;
