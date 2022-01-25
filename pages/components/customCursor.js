import React, {useState, useEffect}from 'react';
import {useGlobalStateContext} from '../context/globalContext';

function CustomCursor() {
  const [mousePos, setMousePos] = useState({
    x:400,
    y:400
  });
  const {cursorType} = useGlobalStateContext()

  const onMouseMove= event =>{
    const {pageX: x, pageY: y} = event;
    setMousePos({x, y})
  };

  useEffect(()=>{
    document.addEventListener('mousemove', onMouseMove);
    return()=>{
      document.removeEventListener('mousemove', onMouseMove)
    }
  },[])

  return <div className={`${!!cursorType ? 'hovered': 'cursor'}`} style={{left:`${mousePos.x}px`, top:`${mousePos.y}px`}}></div>;
}

export default CustomCursor;
