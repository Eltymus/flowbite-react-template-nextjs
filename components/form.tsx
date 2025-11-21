import {
  Label,
  TextInput,
  ToggleSwitch,
  createTheme,
  ThemeProvider,
} from "flowbite-react";
import { useState } from "react";
import React from "react";
import { Chalkboard } from "../pages/icons";
import {
  FaUser,
  FaStore,
  FaAddressCard,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";

const customTheme = createTheme({
  textInput: {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-amber-400 focus:ring-amber-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-400 dark:focus:ring-amber-300",
          info: "border-amber-400 bg-amber-50 text-amber-900 placeholder-amber-700 focus:border-amber-400 focus:ring-amber-300 dark:border-amber-400 dark:bg-amber-100 dark:focus:border-amber-400 dark:focus:ring-amber-300",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
        withRightIcon: { on: "pr-10", off: "" },
        withIcon: { on: "pl-10", off: "" },
        withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
        withShadow: { on: "dark:shadow-sm-light shadow-sm", off: "" },
      },
    },
  },

  toggle: {
    root: {
      base: "group flex rounded-lg focus:outline-none",
      active: { on: "cursor-pointer", off: "cursor-not-allowed opacity-50" },
      label:
        "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
      input: "sr-only",
    },
    toggle: {
      base: "relative rounded-full group-focus:ring-4 after:absolute after:rounded-full after:border after:bg-white after:transition-all",
      checked: {
        on: "after:translate-x-full after:border-transparent rtl:after:-translate-x-full",
        off: "bg-gray-200 after:border-gray-300 dark:bg-gray-700",
        color: {
          default:
            "bg-amber-400 group-focus:ring-amber-300 dark:group-focus:ring-amber-800",
          blue: "bg-amber-400 group-focus:ring-amber-300 dark:group-focus:ring-amber-800",
          dark: "bg-gray-700 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
          failure:
            "bg-red-700 group-focus:ring-red-300 dark:group-focus:ring-red-800",
          gray: "bg-gray-500 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
          green:
            "bg-green-600 group-focus:ring-green-300 dark:group-focus:ring-green-800",
          light:
            "bg-gray-300 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
          red: "bg-red-700 group-focus:ring-red-300 dark:group-focus:ring-red-800",
          purple:
            "bg-purple-700 group-focus:ring-purple-300 dark:group-focus:ring-purple-800",
          success:
            "bg-green-500 group-focus:ring-green-300 dark:group-focus:ring-green-800",
          yellow:
            "bg-yellow-400 group-focus:ring-yellow-300 dark:group-focus:ring-yellow-800",
          warning:
            "bg-yellow-600 group-focus:ring-yellow-300 dark:group-focus:ring-yellow-800",
          cyan: "bg-amber-400 group-focus:ring-amber-300 dark:group-focus:ring-amber-800",
          lime: "bg-lime-400 group-focus:ring-lime-300 dark:group-focus:ring-lime-800",
          indigo:
            "bg-indigo-400 group-focus:ring-indigo-300 dark:group-focus:ring-indigo-800",
          teal: "bg-teal-400 group-focus:ring-teal-300 dark:group-focus:ring-teal-800",
          info: "bg-amber-400 group-focus:ring-amber-300 dark:group-focus:ring-amber-800",
          pink: "bg-pink-600 group-focus:ring-pink-300 dark:group-focus:ring-pink-800",
        },
      },
      sizes: {
        sm: "h-5 w-9 min-w-9 after:top-0.5 after:left-0.5 after:h-4 after:w-4 rtl:after:right-0.5",
        md: "h-6 w-11 min-w-11 after:top-0.5 after:left-0.5 after:h-5 after:w-5 rtl:after:right-0.5",
        lg: "h-7 w-[52px] min-w-[52px] after:top-0.5 after:left-0.5 after:h-6 after:w-6 rtl:after:right-0.5",
      },
    },
  },
});

export function FormSubmit() {
  const [switch1, setSwitch1] = useState(false);
  const { t } = useTranslation("common");

  const fields = t("home.demo_form.fields", { returnObjects: true }) as any[];
  const useSapSwitch = t("home.demo_form.uses_sap_business_one", {
    returnObjects: true,
  }) as any;
  const submitBtn = t("home.demo_form.submit", { returnObjects: true }) as any;

  const iconMap: { [key: string]: any } = {
    FaUser,
    FaStore,
    FaAddressCard,
    FaEnvelope,
    FaPhoneAlt,
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="sm:w1/2 m-10 items-center justify-center md:w-full">
        <div className="text-xl font-bold">{t("home.demo_form.title")}</div>

        {fields.map((field: any) => (
          <div key={field.id} className="my-4">
            <div className="mb-2 block">
              <Label htmlFor={field.id}>{field.label}</Label>
            </div>
            <TextInput
              id={field.id}
              placeholder={field.placeholder}
              type={field.type}
              addon={
                iconMap[field.icon]
                  ? React.createElement(iconMap[field.icon])
                  : undefined
              }
              required={field.required}
            />
          </div>
        ))}

        {/* Toggle Switch */}
        <div className="my-3 flex flex-row justify-center gap-10 rounded-2xl border border-gray-200 bg-white p-3 align-middle">
          <Chalkboard className="h-15 rounded-2xl bg-gray-100 p-2" />
          <div className="flex flex-col gap-2 rounded-3xl align-middle">
            <ToggleSwitch
              className="text-amber-500"
              checked={switch1}
              label={useSapSwitch.label}
              onChange={setSwitch1}
            />
            <p className="text-gray-500">{useSapSwitch.description}</p>
          </div>
        </div>

        {/* Bottone di Invio */}
        <div className="flex justify-center">
          <Button className={submitBtn.className}>{submitBtn.label}</Button>
        </div>
      </form>
    </ThemeProvider>
  );
}
