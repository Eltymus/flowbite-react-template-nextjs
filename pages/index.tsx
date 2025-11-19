import { Nav } from "../components/navbar";
import { Hero } from "../components/hero";
import { Description } from "../components/heroDescription";
import { Cards } from "../components/card";
import { LogoComp } from "../components/logoComposition";
import { Foot } from "../components/footer";
import { Advantages } from "../components/advantages";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { FormSubmit } from "../components/form";
import { FixTables, CodePC, Cloud } from "./icons";
import home from "../public/text.json";
import { motion } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

export default function Home() {
  const scrollRef = useRef(null);
  const { t } = useTranslation("home");
  return (
    <main className="bg-linear-to-b from-amber-100 from-10% to-white to-70%">
      <head>
        <title>EAM One</title>
      </head>

      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ root: scrollRef }}
      >
        <Nav />
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ root: scrollRef }}
        >
          <Hero />
        </motion.div>
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ root: scrollRef }}
        >
          <div className="mx-8 flex flex-col items-center justify-center md:flex-row">
            <Description
              title={t("value_props.0.title")}
              description={t("value_props.0.text")}
              Icon={FixTables}
            />
            <Description
              title={t("value_props.1.title")}
              description={t("value_props.1.text")}
              Icon={CodePC}
            />
            <Description
              title={t("value_props.2.title")}
              description={t("value_props.2.text")}
              Icon={Cloud}
            />
          </div>
        </motion.div>
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ root: scrollRef }}
        >
          <div id="advantages">
            <div className="mx-5 flex flex-col items-center md:flex-row md:items-baseline">
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
          </div>
        </motion.div>
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ root: scrollRef }}
        >
          <div id="faq">
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
          </div>
        </motion.div>
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ root: scrollRef }}
        >
          <div id="contact" className="flex flex-col md:flex-row">
            <LogoComp />
            <FormSubmit />
          </div>
        </motion.div>
      </motion.div>
      <Foot />
    </main>
  );
}
