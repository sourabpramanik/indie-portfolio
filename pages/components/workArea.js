import React from "react";
import { useGlobalDispatchContext } from "../context/globalContext";

function WorkArea() {
  const dispatch = useGlobalDispatchContext();

  return (
    <div className="pt-r200">
      <div className="page__container">
        <p className="tagline-text">/ Niche</p>
        <div className="workarea-wrapper">
          <h1 className="t-heading-600r">
            What am I <br /> working on?
          </h1>
          <div className="workarea-grid-area">
            {/* 1 */}
            <div className="workarea-grid-layout">
              <div className="workarea-grid-item">
                <h3 className="t-heading-400r workarea-grid-item-title">
                  Designs
                </h3>
                <div className="workarea-content">
                  <p className="workarea-content-text">
                    I design web pages, mobile applications, 3d character and
                    stuff. There’s lot to see...
                  </p>
                </div>
                <div
                  className="workarea-anchor"
                  onMouseEnter={() => dispatch("hovered")}
                  onMouseLeave={dispatch}
                >
                  <svg
                    className="anchor-arrow"
                    width="48"
                    height="12"
                    viewBox="0 0 48 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41 1L46 6L41 11"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path d="M46 6H0" stroke="white" stroke-width="2" />
                  </svg>
                </div>
              </div>
              <div className="workarea-grid-item">
                <h3 className="t-heading-400r workarea-grid-item-title">
                  Photographs
                </h3>
                <div className="workarea-content">
                  <p className="workarea-content-text">
                    No way I am professional photographer but I know how to use
                    Lightroom which makes every picture I edit stunning.
                  </p>
                </div>
                <div
                  className="workarea-anchor"
                  onMouseEnter={() => dispatch("hovered")}
                  onMouseLeave={dispatch}
                >
                  <svg
                    className="anchor-arrow"
                    width="48"
                    height="12"
                    viewBox="0 0 48 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41 1L46 6L41 11"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path d="M46 6H0" stroke="white" stroke-width="2" />
                  </svg>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="workarea-grid-layout">
              <div className="workarea-grid-item">
                <h3 className="t-heading-400r workarea-grid-item-title">
                  Websites & Apps
                </h3>
                <div className="workarea-content">
                  <p className="workarea-content-text">
                    As a web and application freelancer I get to work on
                    multiple projects of different stacks and complexities with
                    incredible ideas.
                  </p>
                </div>
                <div
                  className="workarea-anchor"
                  onMouseEnter={() => dispatch("hovered")}
                  onMouseLeave={dispatch}
                >
                  <svg
                    className="anchor-arrow"
                    width="48"
                    height="12"
                    viewBox="0 0 48 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41 1L46 6L41 11"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path d="M46 6H0" stroke="white" stroke-width="2" />
                  </svg>
                </div>
              </div>
              <div className="workarea-grid-item">
                <h3 className="t-heading-400r workarea-grid-item-title">
                  Blogs
                </h3>
                <div className="workarea-content">
                  <p className="workarea-content-text">
                    Writting is not really my thing but sharing is, so I write
                    blogs to share how I get certain projects or tasks done.
                  </p>
                </div>
                <div
                  className="workarea-anchor"
                  onMouseEnter={() => dispatch("hovered")}
                  onMouseLeave={dispatch}
                >
                  <svg
                    className="anchor-arrow"
                    width="48"
                    height="12"
                    viewBox="0 0 48 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M41 1L46 6L41 11" stroke="white" strokeWidth="2" />
                    <path d="M46 6H0" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkArea;
