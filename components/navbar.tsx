import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  createTheme,
  ThemeProvider,
} from "flowbite-react";
import { motion } from "motion/react";

const customTheme = createTheme({
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 sm:px-4 dark:border-gray-700 dark:bg-gray-800",
      rounded: { on: "rounded", off: "" },
      bordered: { on: "border", off: "" },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: { on: "", off: "container" },
      },
    },
    brand: { base: "flex items-center" },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: { on: "hidden", off: "" },
    },
    link: {
      base: "block py-2 pr-4 pl-3 text-gray-700 transition-colors duration-150 md:p-0 dark:text-gray-400",
      active: {
        on: "bg-primary-700 md:text-primary-700 text-white md:bg-transparent dark:text-white",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 hover:text-amber-400 focus:text-amber-400 md:border-0 md:hover:bg-transparent md:hover:text-amber-400 md:focus:text-amber-400 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      icon: "h-6 w-6 shrink-0",
      title: "sr-only",
    },
  },
});

export function Nav() {
  return (
    <ThemeProvider theme={customTheme}>
      <motion.div>
        <Navbar fluid>
          <NavbarBrand href="">
            <img src="EAMONElogo.png" className="m-3 h-10" alt="EAM ONE Logo" />
          </NavbarBrand>

          <div className="flex md:order-2">
            <Button
              href="#contact"
              className="bg-amber-500 delay-150 duration-150 hover:bg-purple-500"
            >
              Solicitar demo
            </Button>
            <NavbarToggle />
          </div>

          <NavbarCollapse>
            <NavbarLink href="#advantages">Ventajas</NavbarLink>
            <NavbarLink href="#faq">FAQs</NavbarLink>
            <NavbarLink href="#contact">Contacto</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </motion.div>
    </ThemeProvider>
  );
}
