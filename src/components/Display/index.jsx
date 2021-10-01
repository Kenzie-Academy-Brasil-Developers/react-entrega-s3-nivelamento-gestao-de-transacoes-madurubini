import { useState } from "react";
import Card from "../Card";
import Total from "../Total";

const Display = ({ transactions }) => {
  const [filterItems, setFilterItems] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [saidaProducts, setSaidaProducts] = useState([]);
  const [entradaProducts, setEntradaProducts] = useState([]);

  const setProducts = (type) => {
    setFilterItems(transactions.filter((item) => item.type === type));
    if (type === "saida") {
      setEntradaProducts(filterItems);
      setShowButton(true);
    }
    if (type === "entrada") {
      setSaidaProducts(filterItems);
      setShowButton(false);
    }
    console.log(entradaProducts);
  };

  return (
    <div>
      {showButton ? (
        <>
          <button onClick={() => setProducts("entrada")}>
            Mostrar Entradas
          </button>
          <h3>Saídas</h3>
        </>
      ) : (
        <>
          <button onClick={() => setProducts("saida")}> Mostrar Saídas</button>
          <h3>Entradas</h3>
        </>
      )}
      {filterItems.map((item, index) => (
        <Card key={index} item={item}></Card>
      ))}
      <>
        <h3>Total</h3>
        <Total
          saidaProducts={saidaProducts}
          entradaProducts={entradaProducts}
        ></Total>
      </>
    </div>
  );
};

export default Display;
