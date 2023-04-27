import Caixa from "@/components/basicos/Caixa";
import Circulo from "@/components/basicos/Circulo";
import Evento from "@/components/basicos/Evento";

export default function Home() {
  return (
    <div>
      <div className="flex gap-5 p-5 justify-around">
        <span>Componente com children.props</span>
        <Caixa>#1</Caixa>
        <Caixa>#2</Caixa>
        <Caixa>#3</Caixa>
      </div>
      <div className="flex gap-5 p-5 justify-around">
        <span>Componente com props</span>
        <Circulo texto="#1" quasePerfeito />
        <Circulo texto="#2" />
        <Circulo texto="#3" />
      </div>
      <div className="flex gap-5 p-5 justify-around">
        <span>Componente com eventos e estado</span>
        <Evento />
        <Evento />
        <Evento />
      </div>
    </div>
  );
}
