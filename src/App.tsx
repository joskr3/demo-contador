import "./App.css";
import Contador from "./components/contador";

function App() {
  return (
    <>
    
      <h1>Demo de un contador</h1>
      <section className="contadores">
        <Contador />
        <Contador  />
        <Contador  />
      </section>
    </>
  );
}

export default App;
