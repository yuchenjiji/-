import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
    return (
      <div> 
        <h1>Padre Gino's - Order Now</h1>
        <Pizza name="Pepperoni" description="Classic pepperoni pizza with tomato sauce and mozzarella cheese." />
        <Pizza name="Margherita" description="Fresh tomatoes, mozzarella cheese, and basil." />
        <Pizza name="Hawaiian" description="Ham and pineapple on a cheesy tomato base." />
      </div>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);