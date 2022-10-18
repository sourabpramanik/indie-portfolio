import React, { useState, useEffect, useRef } from "react";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import Cursor from "./utils/cursor";

// const webVideo = require("");
function CustomCursor() {
  const cursorRef = useRef();
  const dispatch = useGlobalDispatchContext();
  useEffect(() => {
    const cursor = new Cursor(cursorRef.current);
    cursor.render();
    dispatch("pointer");
  }, []);

  const { cursorStyles } = useGlobalStateContext();
  return (
    <div className={cursorStyles ?? "pointer"} ref={cursorRef}>
      {cursorStyles === "video-hover" && (
        <video loop muted autoPlay>
          <source src="video/websites.mp4" />
        </video>
      )}
    </div>
  );
}

export default CustomCursor;
