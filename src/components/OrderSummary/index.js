import React from "react";
import Button from "../General/Button";

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
      <p>
        <strong>Orders: {props.price}$ </strong>
      </p>
      <p>Next Page?</p>
      <Button clicked={props.onCancel} btnType="Danger" text="Continue" />
      <Button clicked={props.onContinue} btnType="Success" text="Cancel" />
    </div>
  );
};

export default OrderSummary;
