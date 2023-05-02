interface FilhoProps {
  nome: string;
  sobrenome: string;
}

export default function Filho(props: FilhoProps) {
  return (
    <div className="flex justify-center items-center bg-green-800 rounded">
      <div className="flex flex-col items-center gap-5 p-2 rounded">
        <h1>Filho</h1>
        <div className="flex gap-2">
          <span>
            {props.nome} {props.sobrenome}
          </span>
        </div>
      </div>
    </div>
  );
}
