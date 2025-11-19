"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

interface CardsProps {
  picture: string;
  altText: string;
  title: string;
  description: string;
}

export function Cards({ picture, altText, title, description }: CardsProps) {
  return (
    <Card
      className="m-5 min-h-full max-w-sm"
      renderImage={() => (
        <Image
          width={500}
          height={500}
          src={picture}
          alt={altText}
          className="rounded-3xl p-4"
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Card>
  );
}
