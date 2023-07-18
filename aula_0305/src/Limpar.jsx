import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Limpar = () => {
  const { limparProdutos } = useContext(GlobalContext);
  return <button onClick={limparProdutos}>Limpar</button>;
};

export default Limpar;
