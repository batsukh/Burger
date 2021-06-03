import React from "react";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Your order</h3>
      <p>Your Burger</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
