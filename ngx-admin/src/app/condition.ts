export class Condition {
    id: number;
    timerangeid: number;
    zoneid: number;
    zonesensorid: number;
    triggerid: number;
    sensorstatus: string;
    triggerstatus: string;
    type: string;
    valueoperator: string;
    value: number;
    valueoperators: string;
    
    constructor() {
        this.id = 0;
        this.type = 'zonesensorvalue';
     }  

  }
