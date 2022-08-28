import CartContainers from "./CartContainer";
import NavBar from "./Components/NavBar";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainers />
    </main>
  );
}
export default App;
