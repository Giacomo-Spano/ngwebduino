import { Timerange } from "./timerange";

export class Program {
    id: number;
    scenarioid: number;
    name: string;
    description: string;
    enabled: boolean;
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean; 
    timeranges: Timerange[];
    activetimerange: Object;

    constructor(obj: any ) {
      this.id = obj.id;  
      this.name = obj.name; 
      this.sunday = obj.sunday;
      this.monday = obj.monday;
      this.tuesday = obj.tuesday;
      this.wednesday = obj.wednesday;
      this.thursday = obj.thursday;
      this.friday = obj.friday;
      this.saturday = obj.saturday;

      if (obj.timeranges != null) {
        const a: any[] = [];
        this.timeranges = [];
        for (let entry of obj.timeranges) {
          console.log(entry); // 1, "string", false

          let tr = new Timerange();
          tr.id = entry.id;
          tr.name = entry.name;
          tr.starttime = entry.starttime;
          tr.endtime = entry.endtime;
          tr.conditions = entry.conditions;
          tr.actions = entry.actions;
          this.timeranges.push(tr);
        }
      }

      /*for (let)
      let tr = new Timerange();*/

    }
  }
