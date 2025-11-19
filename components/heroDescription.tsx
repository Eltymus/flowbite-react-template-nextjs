// components/heroDescription.tsx
import * as React from "react";

type DescriptionProps = {
  title: string;
  description: string;
  Icon: React.ElementType<React.ComponentProps<"svg">>;
};

export function Description({ Icon, title, description }: DescriptionProps) {
  return (
    <div className="m-2 flex sm:flex-col md:flex-row">
      <Icon className="h-full fill-amber-400 sm:w-10 md:w-30" />
      <div className="mx-5 flex flex-col">
        <div className="text-xl font-semibold tracking-tight text-balance text-gray-900">
          {title}
        </div>
        <div className="text-l my-5 font-medium text-pretty text-gray-500">
          {description}
        </div>
      </div>
    </div>
  );
}
