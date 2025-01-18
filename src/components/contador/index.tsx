import { useState } from "react";
import "./style.css";

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div className="container">
      <h2>Contador: {contador}</h2>
      <section>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(0)}>Reset</button>
      </section>
    </div>
  );
}

export default Contador;
