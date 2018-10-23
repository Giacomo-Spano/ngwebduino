import { Status } from "./status";
import { Command } from "./command";

export class Trigger {
    id: number;
    name: string;
    status: string;
    statuslist: string[];
    actioncommandlist: Command[];
  }
