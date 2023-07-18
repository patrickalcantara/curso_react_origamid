import { useState } from "react";
import Produtos from "./Produtos";

function App() {
  const [dados, setDados] = useState(null);
  const [menssagem, setMensagem] = useState(false);

  const handleTablet = async (event) => {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${event.target.name}`;
    setMensagem(true);
    const response = await fetch(url);
    const result = await response.json();
    setDados(result);
    setMensagem(false);
  };

  return (
    <>
      <h1>Atividade</h1>
      <button onClick={handleTablet} name="tablet">
        Consultar Tablet
      </button>
      <button onClick={handleTablet} name="smartphone">
        Consultar Smartphone
      </button>
      <button onClick={handleTablet} name="notebook">
        Consultar Notebook
      </button>
      {menssagem && <p>Carregando...</p>}
      {!menssagem && dados && <Produtos dados={dados} />}
    </>
  );
}

export default App;
