import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENTS_PRICE = { salad: 100, chesse: 150, bacon: 230, meat: 300 };
const INGREDIENTS_NAMES = {
  salad: "Salad",
  chesse: "Cheese",
  bacon: "Bacon",
  meat: "Meat",
};

// const controls = {
//   salad: "Salad",
//   bacon: "Bacon",
//   chesse: "Chesse",
//   meat: "Meat",
// };

class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      chesse: 0,
      bacon: 0,
      meat: 0,
    },

    totalPrice: 100,
    purchasing: false,
    confirmOrder: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];

    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
      this.setState({
        purchasing: newPrice > 100,
        totalPrice: newPrice,
        ingredients: newIngredients,
      });
    }
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            ingredientsNames={INGREDIENTS_NAMES}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENTS_NAMES}
          disabled={!this.state.purchasing}
          ortsHasah={this.ortsHasah}
          ortsNemeh={this.ortsNemeh}
          price={this.state.totalPrice}
        />
      </div>
    );
  }
}

export default BurgerPage;
