import ImagemAleatoria from "@/components/basicos/hooks/ImagemAleatoria";

export default function PaginaImagens() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <ImagemAleatoria />
      <ImagemAleatoria />
      <ImagemAleatoria />
    </div>
  );
}
