import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produtos = () => {
  const { produtos } = useContext(GlobalContext);

  return (
    <>
      {produtos && (
        <>
          <h1>Produtos</h1>
          <ul>
            {produtos.map((produto) => {
              return <li key={produto.id}>{produto.nome}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Produtos;
