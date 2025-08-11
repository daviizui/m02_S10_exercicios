import "./ItemTabela.css";

export default function ItemTabela({ info }) {
  return (
    <tr className="linhaTabela">
      <td>{info.nome}</td>
      <td>{info.tipo}</td>
      <td>{info.marca}</td>
      <td>{info.voltagem}</td>
      <td>{info.ano}</td>
      <td>{info.preco}</td>
      <td>{info.peso_kg}</td>
      <td>{info.ativo ? "true" : "false"}</td>
    </tr>
  );
}
