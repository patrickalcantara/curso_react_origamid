import React from "react";

const Produtos = ({ dados }) => {
  return (
    <>
      <p>Nome: {dados.nome}</p>
      <p>Preço: R$ {dados.preco}</p>
      <p>
        Descrição: <small>{dados.descricao}</small>
      </p>

      {dados.fotos.map((foto) => {
        return <img key={foto.titulo} src={foto.src} alt={foto.titulo} />;
      })}
    </>
  );
};

export default Produtos;
