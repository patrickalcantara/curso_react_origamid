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
      <form onSubmit={handleSubmit} id="form">
        {formFields.map(({ id, label, type }) => {
          return (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                name={id}
                id={id}
                value={form[id]}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          );
        })}

        <button>Enviar</button>
        {response && response.ok && <p>Usuário cadastrado com sucesso!</p>}
      </form>
    </>
  );
};

export default App;
