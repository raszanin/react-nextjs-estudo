interface DisplayProps {
  valor: number;
}

export default function Display(props: DisplayProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-md bg-green-700">
      <span className="text-5xl">{props.valor}</span>
    </div>
  );
}
