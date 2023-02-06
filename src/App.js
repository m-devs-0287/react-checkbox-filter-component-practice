import CheckBoxFilter from "./components/checkbox-filter/CheckBoxFilter";
import ProductsContainer from "./components/products/Products";
import ColorProvider from "./components/hooks/colorsContext/ColorContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Practice</h1>
      <ColorProvider>
        <CheckBoxFilter />
        <ProductsContainer />
      </ColorProvider>
    </div>
  );
}
