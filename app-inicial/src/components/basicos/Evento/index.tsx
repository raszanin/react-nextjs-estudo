import { useState } from "react";

export default function Evento() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <button
      onClick={incrementar}
      className="flex rounded justify-around items-center h-40 w-40 bg-green-600 hover:bg-green-800"
    >
      {contador}
    </button>
  );
}
