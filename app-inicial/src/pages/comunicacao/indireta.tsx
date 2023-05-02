import Contador from "@/components/comunicacao/indireta/Contador";

export default function PaginaIndireta() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1>Comunicação Indireta</h1>
      <div className="flex gap-4">
        <Contador />
        <Contador />
        <Contador />
      </div>
    </div>
  );
}
