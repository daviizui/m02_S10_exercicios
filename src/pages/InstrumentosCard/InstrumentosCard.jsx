import { useEffect, useState } from "react";
import "./InstrumentosCard.css";

export default function InstrumentosCard() {
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
    <div className="cards">
      {itemInfo.map((item) => {
        return (
          <article className="article" key={item.id}>
            <h2>{item.nome}</h2>
            <ul>
              <li>
                <b>Tipo:</b> {item.tipo}
              </li>
              <li>
                <b>Marca:</b> {item.marca}
              </li>
              <li>
                <b>Voltagem:</b> {item.voltagem}
              </li>
              <li>
                <b>Ano:</b> {item.ano}
              </li>
              <li>
                <b>Preço:</b>{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.preco)}
              </li>
              <li>
                <b>Peso:</b>{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "unit",
                  unit: "kilogram",
                }).format(item.peso_kg)}
              </li>
              <li>
                <b>Status:</b>{" "}
                <span style={{ color: item.ativo ? "green" : "red" }}>
                  {item.ativo ? "Ativo" : "Inativo"}
                </span>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
}
