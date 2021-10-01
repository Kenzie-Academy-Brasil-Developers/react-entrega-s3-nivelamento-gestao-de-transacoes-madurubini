const Card = ({ item: { index, name, price, quantity } }) => {
  return (
    <p key={index}>
      nome: {name} R$ {price} e Qtd:{quantity}
    </p>
  );
};

export default Card;
