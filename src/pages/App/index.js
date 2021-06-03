import React from "react";
import Toolbar from "../../components/Toolbar";
import css from "./styles.module.css";
import BurgerPage from "../BurgerPage";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content} style={{ marginTop: "60px" }}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
