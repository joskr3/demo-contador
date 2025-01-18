import { useState } from "react";

function Contador() {

  const [valor, setValor] = useState(0);

  return (
    <div className="container">
      <h2>Contador: {valor}</h2>
      <section>
        <label htmlFor="valor">Nuevo valor</label>
        <input
          type="text"
          id="valor"
          name="valor"
          value={valor}
          onChange={(event) => setValor(+event.target.value)}
          placeholder="modificar valor"
        />
      </section>
      <section>
        <button onClick={() => setValor((prevValue) => prevValue + valor)}>+</button>
        <button onClick={() => setValor(valor - valor)}>-</button>
        <button onClick={() => setValor(0)}>Reset</button>
      </section>
    </div>
  );
}

export default Contador;
