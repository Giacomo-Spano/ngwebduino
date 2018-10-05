import { ZoneSensor } from "./zonesensor";

export class Zone {
    id: number;
    webduinosystemid: number;
    name: string;
    description: string;
    type: string;
    enabled: boolean;
    zonesensors: ZoneSensor[];
  }
