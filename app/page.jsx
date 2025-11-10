import { Nav } from "./components/Navbar";
import { Hero } from "./components/hero";
import { Description } from "./components/heroDescription";
import { Cards } from "./components/card";
import { FixTables, CodePC, Cloud } from "./icons";
import home from "../public/text.json";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl bg-linear-to-b from-amber-200 to-white">
      <Nav />
      <Hero />
      <div className="mx-8 flex items-center justify-center sm:flex-col md:flex-row">
        <Description
          className="w-1/3"
          title={home.home.value_props[0].title}
          description={home.home.value_props[0].text}
          Icon={FixTables}
        />
        <Description
          className="w-1/3"
          title={home.home.value_props[1].title}
          description={home.home.value_props[1].text}
          Icon={CodePC}
        />
        <Description
          className="w-1/3"
          title={home.home.value_props[2].title}
          description={home.home.value_props[2].text}
          Icon={Cloud}
        />
      </div>
      <div className="mx-5 flex sm:flex-col md:flex-row">
        <Cards
          className="w-1/3"
          title={home.home.benefits[0].title}
          description={home.home.benefits[0].text}
          picture={"/petrol1.png"}
          altText="Imagen de sistema de gestion de mantenimiento"
        />

        <Cards
          className="w-1/3"
          title={home.home.benefits[1].title}
          description={home.home.benefits[1].text}
          picture="/petrol2.png"
          altText="Imagen de sistema de gestion de mantenimiento"
        />
        <Cards
          className="w-1/3"
          title={home.home.benefits[2].title}
          description={home.home.benefits[2].text}
          picture="/petrol3.png"
          altText="Imagen de sistema de gestion de mantenimiento"
        />
      </div>
    </main>
  );
}
