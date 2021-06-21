import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";
const modal = (props) => (
  <div>
    <Shadow show={props.show} closeConfirmModal={props.closeConfirmModal} />
    <div
      style={{
        tranform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={css.Module}
    >
      {props.children}
    </div>
  </div>
);

export default modal;
