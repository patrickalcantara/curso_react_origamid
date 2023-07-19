import { useState } from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const App = () => {
  //nome, email, senha, cep, rua, numero, bairro, cidade e estado
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          name="cep"
          id="cep"
          value={form.cep}
          onChange={handleChange}
        />

        <label htmlFor="rua">Rua</label>
        <input
          type="text"
          name="rua"
          id="rua"
          value={form.rua}
          onChange={handleChange}
        />

        <label htmlFor="numero">Numero</label>
        <input
          type="text"
          name="numero"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          name="estado"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />
        <button>Enviar</button>
        {response && response.ok && <p>Usuário cadastrado com sucesso!</p>}
      </form>
    </>
  );
};

export default App;
