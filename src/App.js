import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import Card from "./components/Card";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5, type: "entrada" },
    { name: "morango", quantity: 10, price: 2, type: "saida" },
    { name: "laranja", quantity: 50, price: 6, type: "entrada" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Cadastre uma nova fruta</h3>
        <Form transactions={transactions} setTransactions={setTransactions} />
        <h3>Display</h3>
        <Display
          transactions={transactions}
          setTransactions={setTransactions}
        ></Display>
        <h3>Todas as Transações</h3>
        <ul>
          {transactions.map((item, index) => (
            <li key={index}>
              <Card item={item}></Card>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
