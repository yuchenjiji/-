import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Spicy pepperoni with mozzarella and tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Vegetarian",
      description:
        "A mix of seasonal vegetables with mozzarella and tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "BBQ Chicken",
      description: "Grilled chicken with BBQ sauce, red onions, and cilantro",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Ham and pineapple with mozzarella and tomato sauce",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));