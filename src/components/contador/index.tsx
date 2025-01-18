import { useState } from "react";

function Contador() {

  const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
  return (
    <div className="container">
      <h2>Contador: {valor1 + valor2}</h2>
      <section>
        <label htmlFor="valor">Nuevo valor</label>
        <input
          type="text"
          id="valor"
          name="valor"
          value={valor1}
          onChange={(event) => setValor1(+event.target.value)}
          placeholder="modificar valor"
        />
      </section>
      <section>
        <button onClick={() => setValor2(valor2)}>+</button>
        <button onClick={() => setValor()}>-</button>
        <button onClick={() => setValor(0)}>Reset</button>
      </section>
    </div>
  );
}

export default Contador;
