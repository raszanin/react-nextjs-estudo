import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria() {
  const [pesquisa, setPesquisa] = useState<string>("abstract");
  const [tamanho, setTamanho] = useState<number>(300);

  const url = `https://source.unsplash.com/featured/${tamanho}x${tamanho}?`;

  function urlImagem() {
    return `${url}${pesquisa}`;
  }

  function renderizarBotao(valor: string) {
    return (
      <button
        className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={() => {
          setPesquisa(valor);
          console.log(urlImagem());
        }}
      >
        {valor}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-6 border border-zinc-500 p-4 rounded">
      <div className="flex justify-center gap-7">
        <span>{pesquisa}</span>
        <span>
          {tamanho}x{tamanho}
        </span>
      </div>
      <Image
        src={`${url}${pesquisa}`}
        width={300}
        height={300}
        alt="Imagem aleatória"
        priority={true}
      />

      <div className="flex gap-3 justify-between ">
        {renderizarBotao("abstract")}
        {renderizarBotao("city")}
        {renderizarBotao("person")}
      </div>

      <div>
        <input
          type="number"
          onChange={(e) => {
            setTamanho(+e.target.value);
          }}
          value={tamanho}
          className="bg-zinc-500 p-3 w-full rounded outline-none"
        />
      </div>
    </div>
  );
}
