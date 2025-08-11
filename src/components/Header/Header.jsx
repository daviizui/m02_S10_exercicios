import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="btn">
        <button>listagem (cards)</button>
        <button>listagem (tabela)</button>
      </div>
      <h1>Lista de Instrumentos</h1>
    </header>
  );
}
