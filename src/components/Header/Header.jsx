import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="btn">
        <Link to="/" className="btn-link">
          listagem (cards)
        </Link>
        <Link to="/instrumentoTabela" className="btn-link">
          listagem (tabela)
        </Link>
      </div>
      <h1>Lista de Instrumentos</h1>
    </div>
  );
}
