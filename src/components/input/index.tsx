interface IINputProps {
  valor: string
}

function Input({valor}:IINputProps) {

  return (
    <section>
      <label htmlFor="valor"></label>
      <input
        type="text"
        id="valor"
        name="valor"
        value={valor}
        placeholder="modificar valor"
      />
    </section>
  );
}

export default Input
