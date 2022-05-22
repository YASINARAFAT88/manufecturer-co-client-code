import { useEffect, useState } from "react";

const useInventory = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('items.json')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])
  return [stocks, setStocks]
}
export default useInventory;