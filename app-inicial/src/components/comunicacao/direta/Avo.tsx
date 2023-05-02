import Pai from "./Pai";

interface AvoProps {
  nome: string;
  sobrenome: string;
}

export default function Avo(props: AvoProps) {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center gap-5 p-2 rounded bg-slate-700">
        <h1>Avo</h1>
        <div>
          <span>
            {props.nome} {props.sobrenome}
          </span>
        </div>
        <div className="flex gap-2">
          <Pai nome="Juliano" sobrenome={props.sobrenome} />
          <Pai nome="Cipriano" sobrenome={props.sobrenome} />
          <Pai nome="Fulano" sobrenome={props.sobrenome} />
        </div>
      </div>
    </div>
  );
}
