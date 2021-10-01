import { useState } from "react";

const Form = ({ transactions, setTransactions }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const enterOperation = () => {
    if (quantity > 0 || price > 0) {
      setTransactions([
        ...transactions,
        {
          name: name,
          quantity: Number.parseFloat(quantity),
          price: Number.parseFloat(price),
          type: "entrada",
        },
      ]);
    }
    setName("");
    setPrice("");
    setQuantity("");
  };

  const exitOperation = () => {
    if (quantity > 0 || price > 0) {
      setTransactions([
        ...transactions,
        {
          name: name,
          quantity: Number.parseFloat(-quantity),
          price: Number.parseFloat(price),
          type: "saida",
        },
      ]);
    }
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div>
      <input
        type="name"
        placeholder="Nome do Produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={enterOperation}>Cadastrar Entrada</button>
      <button onClick={exitOperation}>Cadastrar Saída</button>
    </div>
  );
};

export default Form;
