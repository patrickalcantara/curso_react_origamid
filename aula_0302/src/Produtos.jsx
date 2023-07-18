import React from "react";

const Produtos = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </>
  );
};

export default Produtos;
