import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        const dadosApi = await response.json();
        setItemInfo(dadosApi);
      })
      .catch((error) => {
        console.log("Erroao buscar dados", error);
      });
  }, [url]);
  return { itemInfo };
}
