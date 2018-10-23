import { Condition } from "./condition";
import { Action } from "./action";

export class Timerange {
    id: number;
    programid: number;
    name: string;
    description: string;
    enabled: boolean;
    starttime: string;
    endtime: string;
    actions: Action[];
    conditions: Condition[];

    constructor() {  
        this.id = 0;
        this.name = "new timerange";
        this.enabled = true;
        this.starttime = "00:00";
        this.endtime = "00:01";
    }  
  }
