import { useEffect, useState } from "react";
import "./InstrumentosTabela.css";
import ItemTabela from "../../components/ItemTabela/ItemTabela";

export default function InstrumentosTabela() {
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/equipamentos")
      .then(async (response) => {
        const dadosApi = await response.json();
        setItemInfo(dadosApi);
      })
      .catch((error) => {
        console.log("Erroao buscar dados", error);
      });
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Voltagem</th>
            <th>Ano</th>
            <th>Preço(R$)</th>
            <th>Peso(Kg)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {itemInfo.map((item) => (
            <ItemTabela key={item.id} info={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}
