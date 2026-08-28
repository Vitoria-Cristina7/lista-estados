import { useEffect, useState } from "react";
import Estado from "./components/Estado";
import "./App.css";

function App() {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((resposta) => resposta.json())
      .then((dados) => setEstados(dados));
  }, []);

  return (
    <main className="container">
      <h1>Estados do Brasil</h1>

      <div className="lista-estados">
        {estados.map((estado) => (
          <Estado
            key={estado.id}
            sigla={estado.sigla}
            nome={estado.nome}
            regiao={estado.regiao.nome}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
