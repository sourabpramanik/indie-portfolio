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
        opacity: "0%",
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
          overflow: "scroll",
        },
        ease: "power4.inOut",
        stagger: 0.3,
      })
      .to(".full-width-navpage", 0.2, {
        css: {
          display: "none",
        },
      });
  });
  return (
    <div className="full-width-navpage" style={{ display: "none" }}>
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
                      onMouseEnter={() => dispatch("hovered")}
                      onMouseLeave={dispatch}
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
                      <a className="t-heading-500 l-target"
                        onClick={()=>closeNav()}
                        onMouseEnter={()=> dispatch("hovered")} 
                        onMouseLeave={dispatch}>
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
                      onMouseEnter={() => dispatch("hovered")}
                      onMouseLeave={dispatch}
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
                      onMouseEnter={() => dispatch("hovered")}
                      onMouseLeave={dispatch}
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
              onMouseEnter={() => dispatch("hovered")}
              onMouseLeave={dispatch}
              style={{ display: "none" }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavPage;
