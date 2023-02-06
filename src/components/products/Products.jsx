import Products from "../../data/products";
import "./Products.css";
import {
  UseRedColorContext,
  UseBlueColorContext,
  UseWhiteColorContext,
  UseBlackColorContext
} from "../hooks/colorsContext/ColorContext";
const ProductsContainer = () => {
  const redColor = UseRedColorContext();
  const whiteColor = UseBlueColorContext();
  const blackColor = UseWhiteColorContext();
  const blueColor = UseBlackColorContext();

  return (
    <div className="container">
      {Products.filter((product) => {
        return (
          product.color === redColor ||
          product.color === whiteColor ||
          product.color === blackColor ||
          product.color === blueColor
        );
      }).map((item) => (
        <div
          key={item.id}
          className="product"
          style={{ backgroundColor: `${item.color}` }}
        >
          <p style={{ mixBlendMode: "difference", color: "rgb(127,127,127)" }}>
            {item.color}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
