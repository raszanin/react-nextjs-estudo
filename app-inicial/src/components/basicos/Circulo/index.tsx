interface CirculoProps {
  texto: string;
  quasePerfeito?: boolean;
}

export default function Circulo({ texto, quasePerfeito }: CirculoProps) {
  return (
    <div
      className={`
      flex
      justify-center items-center
      h-40 w-40 bg-cyan-500
      ${quasePerfeito ? "rounded-3xl" : "rounded-full"}      
    `}
    >
      {texto}
    </div>
  );
}
