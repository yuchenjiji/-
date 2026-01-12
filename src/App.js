const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);

}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Padre Gino's"),
      React.createElement(Pizza, {
        name: "Margherita",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
      }),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));