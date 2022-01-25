import React from "react";
import { useGlobalDispatchContext } from "../context/globalContext";

function MastHead({ title }) {
  const dispatch = useGlobalDispatchContext();

  return (
    <div className="mastHead-section pb-r200">
      <div className="page__container">
        <div className="t-heading-100 text-center row">
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
        </div>
      </div>
    </div>
  );
}
export default MastHead;
