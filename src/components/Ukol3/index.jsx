import { useEffect } from "react";
/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce setTimeout po 3 vteřinách
  v konzoli vypíše text „Jsem tady“.
*/

export const Ukol3 = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("Jsem tady3");
    }, 3000);
  }, [])
  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
