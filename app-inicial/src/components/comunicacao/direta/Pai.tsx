import Filho from "./Filho";

interface PaiProps {
  nome: string;
  sobrenome: string;
}

export default function Pai(props: PaiProps) {
  return (
    <div className="flex justify-center items-center bg-blue-400 rounded">
      <div className="flex flex-col items-center gap-5 p-2 rounded">
        <h1>Pai</h1>
        <div>
          <span>
            {props.nome} {props.sobrenome}
          </span>
        </div>
        <div className="flex gap-2">
          <Filho nome="Carlos" sobrenome={props.sobrenome} />
          <Filho nome="Maria" sobrenome={props.sobrenome} />
          <Filho nome="Josefina" sobrenome={props.sobrenome} />
        </div>
      </div>
    </div>
  );
}
