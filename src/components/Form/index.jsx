import { useState } from "react";

const Form = ({ transactions, setTransactions }) => {
  const [objProduct, setObjProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
    type: "",
  });

  const enterOperation = () => {
    if (objProduct.quantity > 0 || objProduct.price > 0) {
      return setTransactions([...transactions, objProduct]);
    }
  };

  const selectType = (e) => {
    setObjProduct({ ...objProduct, type: e.target.value });
  };

  return (
    <div>
      <input
        type="name"
        placeholder="Nome do Produto"
        value={objProduct.name}
        onChange={(e) => setObjProduct({ ...objProduct, name: e.target.value })}
      />
      <label>Qtd: </label>
      <input
        type="number"
        placeholder="Quantidade"
        value={objProduct.quantity}
        onChange={(e) =>
          setObjProduct({ ...objProduct, quantity: Math.abs(e.target.value) })
        }
      />
      <label>R$:</label>
      <input
        type="number"
        placeholder="Preço"
        value={objProduct.price}
        onChange={(e) =>
          setObjProduct({ ...objProduct, price: Math.abs(e.target.value) })
        }
      />
      <select required value={objProduct.type} onChange={selectType}>
        <option value="" disabled selected>
          Selecione o tipo de valor
        </option>
        <option value="saida">Saída</option>
        <option value="entrada">Entrada</option>
      </select>
      <button onClick={enterOperation}>Cadastrar</button>
    </div>
  );
};

export default Form;
