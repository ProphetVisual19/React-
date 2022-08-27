import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CartItem from "./Components/CartItem";
import { clearCart } from "./cartSlice";
import { Button } from "@mui/material";

const CartContainers = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  console.log(total);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <Container>
        <h1>Your bag is Empty</h1>
      </Container>
    );
  }
  return (
    <Container>
      <h1>YOUR BAG</h1>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div className="total__container">
        <h2>TOTAL</h2>
        <h2>{total.toFixed(2)}</h2>
      </div>
      <div className="button__container">
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(clearCart())}
          className="clearBtn"
        >
          Clear Cart
        </Button>
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
  .button__container {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clearBtn {
    padding: 0.7rem 2rem 0.7rem 2rem;
    color: red;
    font-size: 1rem;
    font-weight: bolder;
  }
`;
