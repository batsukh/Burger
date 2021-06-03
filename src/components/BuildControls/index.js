import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>Burger Price: {props.price}</p>

      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        Order
      </button>
    </div>
  );
};

export default BuildControls;
