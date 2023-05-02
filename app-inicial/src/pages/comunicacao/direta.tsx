import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
  return (
    <div className="flex flex-col gap-6 justify-center item-center h-screen">
      <div className="flex justify-center text-2xl font-bold items-center">
        <h1 className="">Comunicacao Direta</h1>
      </div>

      <Avo nome="Mariano" sobrenome="Draco" />
    </div>
  );
}
