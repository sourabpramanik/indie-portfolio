import React from "react";
import { useGlobalDispatchContext } from "../context/globalContext";

function MastHead({ title }) {
  const dispatch = useGlobalDispatchContext();

  return (
    <div className="mastHead-section pt-r200">
      <div className="page__container">
        <div className="t-heading-100 text-center">
          <div className="line">
            <span>A Creative</span>
          </div>
          <div className="line">
            <span
              className="t-heading-700 title"
              onMouseEnter={() => dispatch("hovered")}
              onMouseLeave={dispatch}
            >
              Designer
            </span>
            <span> &</span>
          </div>
          <div className="line">
            <span
              className="t-heading-700 title"
              onMouseEnter={() => dispatch("hovered")}
              onMouseLeave={dispatch}
            >
              Developer
            </span>
          </div>
          <div className="sub-title t-paragraph">
            Passionate about creating user centered designs and committing
            experience to leave lasting impact.
          </div>
          <div className="separator">
            <svg
              width="60"
              height="50"
              viewBox="0 0 384 203"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M290 101.5C290 155.348 246.348 199 192.5 199V203C248.557 203 294 157.557 294 101.5H290ZM192.5 199C138.652 199 95 155.348 95 101.5H91C91 157.557 136.443 203 192.5 203V199ZM95 101.5C95 47.6522 138.652 4 192.5 4V0C136.443 0 91 45.4431 91 101.5H95ZM192.5 4C246.348 4 290 47.6522 290 101.5H294C294 45.4431 248.557 0 192.5 0V4ZM0 101H384V97H0V101Z"
                fill="#727272"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MastHead;
