import { useEffect, useState } from "react";
import Produtos from "./Produtos";
import { GlobalStorage } from "./GlobalContext";
import Limpar from "./Limpar";

function App() {
  return (
    <GlobalStorage>
      <Produtos />
      <Limpar />
    </GlobalStorage>
  );
}

export default App;
