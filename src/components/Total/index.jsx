const Total = ({ entradaProducts, saidaProducts }) => {
  const totalQtd = saidaProducts.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  const totalEntrada = entradaProducts.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  const valorSaidas = saidaProducts.reduce((acc, value) => {
    return acc + value.price;
  }, 0);

  return (
    <div>
      <p>Frutas vendidas: {Math.abs(totalQtd)}</p>
      <p>Valor saídas: R$ {valorSaidas}</p>
      <p>Frutas recebidas: {totalEntrada}</p>
    </div>
  );
};

export default Total;
