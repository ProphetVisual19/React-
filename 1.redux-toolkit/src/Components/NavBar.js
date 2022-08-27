import { useSelector } from "react-redux";
import styled from "styled-components";
import InventoryIcon from "@mui/icons-material/Inventory";
const NavBar = () => {
  const { cart } = useSelector((store) => store);

  return (
    <NavWrapper>
      <h1 className="nav__title">Redux Toolkit</h1>
      <div className="nav__basketContainer">
        <InventoryIcon fontSize="large" />
        <h1 className="basketContainer__title">{cart.amount}</h1>
      </div>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  height: 5rem;
  background-color: purple;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  color: white;
  justify-content: space-between;
  top: 0;
  position: sticky;
  box-shadow: black 0 10px 10px -5px;

  .nav__title {
    font-size: 2rem;
  }

  .nav__basketContainer {
    display: flex;
  }

  .basketContainer__title {
    margin-left: 20px;
  }
`;
