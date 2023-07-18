import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = useState(null);

  const limparProdutos = () => {
    setProdutos(null);
  };

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((resp) => resp.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <GlobalContext.Provider value={{ produtos, limparProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
