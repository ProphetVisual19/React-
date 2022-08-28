import styled from "styled-components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { removeItem, increase, decrease } from "../cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <ItemArticle>
      <img src={img} alt={title} className="item_img" />
      <div className="item__container">
        <h4 className="item__title">{title}</h4>
        <h4 className="item__price">$ {price}</h4>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="removeItem"
          onClick={() => dispatch(removeItem({ id }))}
        >
          remove
        </Button>
      </div>
      <div className="amount__container">
        <button
          className="amount__button"
          onClick={() => dispatch(increase({ id }))}
        >
          <ExpandLessIcon fontSize="large" />
        </button>

        <p className="amount_num">{amount}</p>
        <button
          className="amount__button"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem({ id }));
              return;
            }

            dispatch(decrease({ id }));
          }}
        >
          <ExpandMoreIcon fontSize="large" />
        </button>
      </div>
    </ItemArticle>
  );
};

export default CartItem;

const ItemArticle = styled.article`
  display: flex;
  margin: 1rem 0 1rem 0;
  height: 200px;
  align-items: center;
  .item_img {
    width: 8rem;
    object-fit: contain;
    height: 8rem;
  }
  .item__container {
    padding-top: 1rem;
    flex: 2;
  }

  .item__title {
    padding-bottom: 0.7rem;
  }
  .item__price {
    padding-bottom: 1rem;
  }

  .removeItem {
    font-weight: bold;
  }

  .amount__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2rem;
  }
  .amount_num {
    font-size: 1.5rem;
  }

  .amount__button {
    background-color: white;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease 0s;
    border-radius: 50%;
    margin: auto 0;
    width: 35px;
    height: 35px;
  }

  .amount__button:hover {
    background-color: purple;
    color: #fff;
  }
`;
