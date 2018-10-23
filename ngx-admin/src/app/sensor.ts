import { Command } from "./command";
import { Status } from "./status";
import { ActionCommand } from "./actioncommand";

export class Sensor {
    id: number;
    shieldid: number;
    parentid: number;
    subaddress: string;
    name: string;
    description: string;
    type: string;
    enabled: boolean;
    pin: string; 
    status: string;
    statustext: string;
    valuetext: string
    statuslist: string[];
    actioncommandlist: ActionCommand[];
  }
