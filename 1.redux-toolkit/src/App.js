import { Provider } from "react-redux";
import { store } from "./store";
import CartContainers from "./CartContainer";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <CartContainers />
    </Provider>
  );
}
export default App;
