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
    <div className="m-10 flex sm:flex-col md:flex-row">
      <div className="content-center items-center pr-5 text-center">
        <p className="m-5 text-2xl font-bold">
          Control total del mantenimiento, en tiempo real con tablero
          inteligente
        </p>
        <p className="m-5">
          Reduce costos, minimiza paradas y gestiona tareas con integraciones y
          trazabilidad histórica — todo desde un único tablero en tiempo real.
        </p>
      </div>
      <div className="m-5 grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        <TagText
          description="Reducción de costos de mantenimiento"
          Icon={TbFlag}
        />
        <TagText
          description="Posibilidad de integración con sistemas externos"
          Icon={TbTopologyStar3}
        />
        <TagText
          description="Tablero de Control en tiempo real de las actividades en desarrollo y planificadas"
          Icon={TbDeviceTablet}
        />
        <TagText
          description="Trazabilidad histórica de las tareas de mantenimiento de cada equipo"
          Icon={TbArchive}
        />
        <TagText
          description="Minimización de tiempos de parada de equipos"
          Icon={TbSettings}
        />
      </div>
    </div>
  );
}
