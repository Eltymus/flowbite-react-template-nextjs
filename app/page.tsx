import { Nav } from "./components/navbar";
import { Hero } from "./components/hero";
import { Description } from "./components/heroDescription";
import { Cards } from "./components/card";
import { LogoComp } from "./components/logoComposition";
import { Foot } from "./components/footer";
import { Advantages } from "./components/advantages";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { FormSubmit } from "./components/form";
import { FixTables, CodePC, Cloud } from "./icons";
import home from "../public/text.json";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl bg-linear-to-b from-amber-100 from-10% to-white to-70%">
      <Nav />
      <Hero />
      <div className="mx-8 flex items-center justify-center sm:flex-col md:flex-row">
        <Description
          title={home.home.value_props[0].title}
          description={home.home.value_props[0].text}
          Icon={FixTables}
        />
        <Description
          title={home.home.value_props[1].title}
          description={home.home.value_props[1].text}
          Icon={CodePC}
        />
        <Description
          title={home.home.value_props[2].title}
          description={home.home.value_props[2].text}
          Icon={Cloud}
        />
      </div>
      <div className="mx-5 flex sm:flex-col md:flex-row">
        <Cards
          title={home.home.benefits[0].title}
          description={home.home.benefits[0].text}
          picture={"/petrol1.png"}
          altText="Imagen de sistema de gestion de mantenimiento"
        />

        <Cards
          title={home.home.benefits[1].title}
          description={home.home.benefits[1].text}
          picture="/petrol2.png"
          altText="Imagen de sistema de gestion de mantenimiento"
        />
        <Cards
          title={home.home.benefits[2].title}
          description={home.home.benefits[2].text}
          picture="/petrol3.png"
          altText="Imagen de sistema de gestion de mantenimiento"
        />
      </div>
      <Advantages />
      <Accordion className="mx-8 my-8 bg-white">
        {home.home.faq.items.map(({ question, answer }) => (
          <AccordionPanel key={question}>
            <AccordionTitle>{question}</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-700">{answer}</p>
            </AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>
      <div className="flex flex-row">
        <LogoComp />
        <FormSubmit />
      </div>
      <Foot />
    </main>
  );
}
