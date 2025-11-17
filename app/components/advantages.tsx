import {
  TbFlag,
  TbTopologyStar3,
  TbDeviceTablet,
  TbArchive,
  TbSettings,
} from "react-icons/tb";

import { TagText } from "./tagText";

export function Advantages() {
  return (
    <div className="mx-5 my-10 grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <div className="flex flex-row items-start gap-4">
        <div className="rounded-xl bg-purple-200 p-2">
          <TbFlag className="h-6 w-6 text-purple-800" />
        </div>
        <p>Reducción de costos de mantenimiento</p>
      </div>
      <TagText
        description="Posibilidad de integración con sistemas externos"
        Icon={TbTopologyStar3}
      />
    </div>
  );
}
