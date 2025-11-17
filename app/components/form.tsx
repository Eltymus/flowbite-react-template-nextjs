"use client";

import { Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { Chalkboard } from "../icons";
import {
  FaUser,
  FaStore,
  FaAddressCard,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Button } from "flowbite-react";

export function FormSubmit() {
  const [switch1, setSwitch1] = useState(false);
  return (
    <div className="m-10 w-full items-center justify-center">
      <p className="text-xl font-bold">Solicita una demostracion</p>
      <div className="my-4">
        <div className="mb-2 block">
          <Label htmlFor="Nombre">Nombre y apellido</Label>
        </div>
        <TextInput
          id="Nombre"
          placeholder="Nombre y apellido"
          addon={<FaUser />}
          required
        />
      </div>
      <div className="my-4">
        <div className="mb-2 block">
          <Label htmlFor="Empresa">Empresa</Label>
        </div>
        <TextInput
          id="Empresa"
          placeholder="Empresa"
          addon={<FaStore />}
          required
        />
      </div>
      <div className="my-4">
        <div className="mb-2 block">
          <Label htmlFor="Cargo">Cargo</Label>
        </div>
        <TextInput
          id="Cargo"
          placeholder="Cargo"
          addon={<FaAddressCard />}
          required
        />
      </div>
      <div className="my-4">
        <div className="mb-2 block">
          <Label htmlFor="Email">Email</Label>
        </div>
        <TextInput
          id="Email"
          placeholder="Email"
          addon={<FaEnvelope />}
          required
        />
      </div>
      <div className="my-4">
        <div className="mb-2 block">
          <Label htmlFor="Numero">Numero de telefono</Label>
        </div>
        <TextInput
          id="Numero"
          placeholder="Numero de telefono"
          addon={<FaPhoneAlt />}
        />
      </div>

      <div className="my-3 flex flex-row justify-center gap-10 rounded-2xl border border-gray-200 bg-white p-3 align-middle">
        <Chalkboard className="h-15 rounded-2xl bg-gray-100 p-2" />
        <div className="flex flex-col gap-2 rounded-3xl align-middle">
          <ToggleSwitch
            className=""
            checked={switch1}
            label="Utilizo SAP Business One"
            onChange={setSwitch1}
          />
          <p className="text-gray-500">
            Selecciona si utilizas SAP Business One.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="bg-amber-500 tracking-wide delay-150 duration-150 hover:bg-purple-500">
          Solicitar demo
        </Button>
      </div>
    </div>
  );
}
