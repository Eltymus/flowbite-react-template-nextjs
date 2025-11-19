import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: { ...i18n, localeDetection: false },
};

export default withFlowbiteReact(nextConfig);
