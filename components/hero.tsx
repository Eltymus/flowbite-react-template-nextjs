import { Button } from "flowbite-react";

export function Hero() {
  return (
    <div className="my-10 flex items-center justify-center sm:flex-col md:flex-row">
      <div className="flex w-1/2 flex-col items-center p-14 text-center">
        <div className="py-10">
          <h1 className="py-10 text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-3xl">
            Mantenimiento optimizado: correctivo, preventivo y predictivo en un
            solo lugar.
          </h1>
          <p className="text-l font-medium text-pretty text-gray-500">
            EAM One integra la gestión de mantenimiento con SAP Business One
            para que planifiques y controles tus activos con trazabilidad total
            y decisiones basadas en datos.
          </p>
        </div>
        <Button
          className="text-normal bg-amber-500 text-white delay-150 duration-150 hover:bg-purple-500"
          href="#contact"
        >
          Solicitar demo
        </Button>
      </div>
      <div className="hidden w-1/2 items-center justify-center md:flex">
        <img
          src="img_hero.png"
          alt="image with logo inside"
          className="w-4/5"
        />
      </div>
    </div>
  );
}
