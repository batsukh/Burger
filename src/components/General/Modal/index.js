import React from "react";
import css from "./style.module.css";

const modal = (props) => (
  <div
    onClick={props.closeConfirmModal}
    style={{
      tranform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0",
    }}
    className={css.Module}
  >
    {props.children}
  </div>
);

export default modal;
