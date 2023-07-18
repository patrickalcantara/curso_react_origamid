import React from "react";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      <h1 style={{ color: "darkcyan" }}>Produtos</h1>
      {produtos.map(({ nome, propriedades }) => {
        return (
          <section
            key={nome}
            style={{
              border: "1px solid darkgray",
              margin: "1rem 0",
              padding: "1.5rem 1rem",
            }}
          >
            <p>{nome}</p>
            <ul>
              {propriedades.map((propriedade) => (
                <li>{propriedade}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default Produtos;
