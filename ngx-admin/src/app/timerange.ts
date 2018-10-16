import { Condition } from "./condition";
import { Action } from "./action";

export class Timerange {
    id: number;
    scenarioid: number;
    name: string;
    description: string;
    enabled: boolean;
    starttime: string;
    endtime: string;
    actions: Action[];
    conditions: Condition[];

    constructor() {  
     }  
  }
