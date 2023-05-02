import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
  const [num, setNum] = useState(0);
  const [valor, setValor] = useState<number>(1);

  function incrementar() {
    setNum(num + valor);
  }

  function decrementar() {
    setNum(num - valor);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-md bg-green-700">
      <Display valor={num} />
      <div className="flex w-full gap-2">
        <Botoes nome="-" func={decrementar} />
        <Botoes nome="+" func={incrementar} />
      </div>
      <input
        className="outline-none rounded-md border border-white bg-slate-500 p-4"
        type="number"
        value={valor}
        onChange={(e) => setValor(+e.target.value)}
      />
    </div>
  );
}
