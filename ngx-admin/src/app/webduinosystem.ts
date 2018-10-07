import { Scenario } from "./scenario";
import { WebduinosystemActuator } from "./webduinosystemactuator";
import { WebduinosystemZone } from "./webduinosystemzone";
import { WebduinosystemService } from "./webduinosystemservice";


export class Webduinosystem {
    id: number;
    name: string;
    type: string;
    enabled: boolean;
    scenarios: Scenario[];
    actuators: WebduinosystemActuator[];
    zones: WebduinosystemZone[];
    services: WebduinosystemService[];
  }
