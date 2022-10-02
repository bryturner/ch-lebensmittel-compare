import { HeartStraight } from "phosphor-react";
import { IconButtonStyled } from "../../../constants/Theme";

function FavoritesButton({ product, handleFavoriteClick, onFavoritesList }) {
  return (
    <IconButtonStyled
      aria-label="favorite"
      onClick={() => handleFavoriteClick(product._id)}
    >
      {onFavoritesList ? (
        <HeartStraight size={20} color="#df4646" weight="fill" />
      ) : (
        <HeartStraight size={20} color="#333" />
      )}
    </IconButtonStyled>
  );
}

export default FavoritesButton;
