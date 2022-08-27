import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./Components/CartItem";

const CartContainers = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <Container>
        <h1>Your bag is Empty</h1>
      </Container>
    );
  }
  return (
    <Container>
      <h1>Your bag</h1>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div className="total__container">
        <h2>TOTAL</h2>
        <h2>{total}</h2>
      </div>
    </Container>
  );
};

export default CartContainers;

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;

  h1 {
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
    font-size: 3rem;
  }

  .total__container {
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
`;
