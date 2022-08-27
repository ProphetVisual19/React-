import CartContainers from "./CartContainer";
import NavBar from "./Components/NavBar";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calutateTotal } from "./cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calutateTotal());
    console.log(1);
  }, [cartItems]);
  console.log(cartItems);

  return (
    <main>
      <NavBar />
      <CartContainers />
    </main>
  );
}
export default App;
