import "./Estado.css";

function Estado({ sigla, nome, regiao }) {
  return (
    <div className="estado">
      <h2>{sigla}</h2>
      <h3>{nome}</h3>
      <p>Região: {regiao}</p>
    </div>
  );
}

export default Estado;
