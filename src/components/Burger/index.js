import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = (props) => {
  const items = Object.entries(props.ingredients);
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });
  if (content.length === 0) content = <p>ingredients</p>;
  return (
    <div className={css.flexBurgerContainer}>
      <BurgerIngredient type="breadTop" className="bread-top" />
      {content}
      <BurgerIngredient type="breadBotton" className="breadBotton" />
    </div>
  );
};

export default Burger;
