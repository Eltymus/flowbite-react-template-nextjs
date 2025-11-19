export function LogoComp() {
  return (
    <div className="mx-10 my-25 flex max-h-96 flex-row gap-5 md:w-full">
      <div className="content-end">
        <img
          src="EamOneDecorationB.png"
          alt="Decoration made from colored exagons"
          className="w-28"
        />
      </div>
      <div className="w-full content-center">
        <div className="flex flex-col items-center justify-center">
          <img src="EAMONElogo.png" alt="logo Eam One" className="my-12 h-16" />
          <p>Creado por</p>
          <img src="B1dev_black.png" alt="Logo B1 dev" />
          <p>soportado por:</p>
          <img
            src="logosPragmatica.png"
            alt="Couple of logos rapresenting Pragmatica consulktores and IT Sur"
          />
        </div>
      </div>
      <div className="content-start">
        <img
          src="EamOneDecorationA.png"
          alt="Decoration made from colored exagons"
          className="w-28"
        />
      </div>
    </div>
  );
}
