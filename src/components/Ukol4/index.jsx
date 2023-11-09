import { useState, useEffect } from "react";
/*
Zadání 1: Vytvořte v této komponentě stav `nacteno`, který bude mít výchozí hodnotu `false`.
  Dále vytvořte efekt, který po 3 vteřinách nastaví stav `nacteno` na `true`.
Zadání 2: Pomocí ternárního operátoru zobrazte text `Načítám…` nebo `Hotovo!` podle hodnoty
  ve stavu `nacteno`.
*/

export const Ukol4 = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])
  return (
    <>
      <p value={loaded}>{loaded ? 'Hotovo!' : 'Načítám'}</p>
    </>
  );
};
