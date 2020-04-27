import React, { useEffect } from "react";
import "./Alert.css";

//display and setDisplay are state passed from parent
// position : null (in top) ,topRight,bottomRight,bottomLeft,topLeft
export function Alert({ type, children, position, display,style,...rest }) {
  return (
    <>
      <div className={`alert ${type} ${position}`} {...rest} style={{display : display ? 'block' : 'none',...style }}>{children}</div>
    </>
  );
}

