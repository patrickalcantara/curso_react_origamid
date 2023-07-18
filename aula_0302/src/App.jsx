import { useEffect, useState } from "react";
import Produtos from "./Produtos";

function App() {
  const [dados, setDados] = useState(null);

  const consulta = async (produto) => {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${produto}`;
    const response = await fetch(url);
    return await response.json();
  };

  const handleClick = async (event) => {
    const result = await consulta(event.target.name);
    setDados(result);
    localStorage.setItem("produto", event.target.name);
  };

  useEffect(() => {
    async function fetchData() {
      const name = localStorage.getItem("produto");
      if (name) setDados(await consulta(name));
    }
    fetchData();
  }, []);

  return (
    <>
      {dados && <h1>Preferência: {dados.nome}</h1>}
      <button style={{ margin: ".5rem" }} name="notebook" onClick={handleClick}>
        Notebook
      </button>
      <button name="smartphone" onClick={handleClick}>
        Smartphone
      </button>
      {dados && <Produtos dados={dados} />}
    </>
  );
}

export default App;
