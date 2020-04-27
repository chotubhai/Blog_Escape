import React, { useEffect } from "react";
import "./modal.css";

//display and setDisplay are state passed from parent
export const Modal = ({ children, display, setDisplay, style }) => {
  useEffect(() => {
    if (display) document.body.style.backgroundColor = "grey";
    else document.body.style.backgroundColor = "white";
  });
  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      const modal = document.querySelector(".modal");
      if (e.target === modal) setDisplay(false);
    });
    return () => {
      window.removeEventListener("mousedown", () => {
        document.body.style.backgroundColor = "white";
      });
    };
  }, []);

  return (
    <div
      className="modal"
      style={{ display: display ? "block" : "none", ...style }}
    >
      {children}
    </div>
  );
};
