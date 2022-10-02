import { Plus, Check } from "phosphor-react";
import { IconButtonStyled } from "../../../constants/Theme";

function GroceryButton({ product, handleGroceryListClick, onGroceryList }) {
  return (
    <IconButtonStyled
      aria-label="grocery-list"
      onClick={() => handleGroceryListClick(product._id)}
    >
      {onGroceryList ? (
        <Check size={40} color="#333" weight="bold" />
      ) : (
        <Plus size={40} color="#333" weight="bold" />
      )}
    </IconButtonStyled>
  );
}

export default GroceryButton;
