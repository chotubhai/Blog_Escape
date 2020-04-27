import React from "react";
import "./Grid.css";
// export const Grid = ({ className, children, style ,padding }) => {
//   return (
//     <div className={className } style={{padding,...style}}>
//       {children}
//     </div>
//   );
// };

export const Row = ({children,className,style,...rest}) => {
  return (
  <div {...rest} className={`row ${className? className : ''}`} style={style} >{children}</div>
  )
}

export const Column = ({children,className,style,...rest}) => {
  return (
  <div {...rest} className={`column ${className? className : ''}`} style={style}>{children}</div>
  )
}
