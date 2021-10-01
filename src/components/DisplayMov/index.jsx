import Card from "../Card";

const DisplayMov = ({ transactions }) => {
  return (
    <div>
      <h3>Todas as Transações</h3>
      <ul>
        {transactions.map((item, index) => (
          <li key={index}>
            <Card item={item}></Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayMov;
