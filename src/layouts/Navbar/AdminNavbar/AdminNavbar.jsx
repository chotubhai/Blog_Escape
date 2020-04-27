import React, { useEffect } from "react";
import "./AdminNavbar.css";

export const AdminNavbar = ({ children }) => {
  useEffect(() => {
    var link = document.querySelectorAll("._adminSide .link");
    var _adminSide = document.querySelector("._adminSide");

    link.forEach((val) => {
      val.addEventListener("mouseup", () => {
        val.children[0].classList.toggle("active");
      });
    });
    var menu = document.querySelector("._mainNav_menu");
    menu.addEventListener("mouseup", () => {
      _adminSide.classList.toggle("active");
    });

    return () => {
      menu.removeEventListener('mouseup',()=>{});
      link.forEach((val) => {
        val.addEventListener("mouseup", () => {
          val.children[0].classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <div className="_mainNav">
      <div className="_mainNav_menu">&#x2630;</div>
      <div className="_mainNav_child">{children}</div>
    </div>
  );
};

export const SideNav = ({ children, style }) => {
  return (
    <div className="_adminSide active" style={style}>
      {children}
    </div>
  );
};
