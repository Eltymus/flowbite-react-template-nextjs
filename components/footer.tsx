"use client";

import { FooterCopyright, FooterDivider, FooterIcon } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Foot() {
  return (
    <div className="flex flex-col bg-black text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-row justify-between px-18 py-2">
          <div className="inset-y-0 left-0 flex flex-col">
            <img src="B1Logo.png" alt="B1 logo white text" />
          </div>
          <div className="inset-0 right-0 items-end">
            <img
              src="footerLogos.png"
              alt="logo for both pragmatica and ITSur"
            />
          </div>
        </div>
        <hr className="px-4 text-blue-950" />
        <div className="px-18 py-4">
          <div className="w-full sm:flex sm:justify-between">
            <FooterCopyright
              href="#"
              by="B1dev, derechos reservados."
              year={2025}
            />
            <div className="flex space-x-6 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
