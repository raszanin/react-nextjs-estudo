interface BotoesProps {
  nome: string;
  func: () => void;
}

export default function Botoes(props: BotoesProps) {
  return (
    <button
      onClick={props.func}
      className="w-full p-3 justify-center items-center border border-white bg-gray-400 hover:bg-gray-700 rounded font-black text-2xl"
    >
      {props.nome}
    </button>
  );
}
