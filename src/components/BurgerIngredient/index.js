import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.type === "salad") return <div className={css.salad}></div>;
  else if (props.type === "chesse") return <div className={css.chesse}></div>;
  else if (props.type === "breadTop")
    return <div className={css.breadTop}></div>;
  else if (props.type === "bacon") return <div className={css.bacon}></div>;
  else if (props.type === "meat") return <div className={css.meat}></div>;
  else if (props.type === "breadBotton")
    return <div className={css.breadBotton}></div>;
  return <div>{props.type}</div>;
};

export default BurgerIngredient;
