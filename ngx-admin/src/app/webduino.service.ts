import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Webduinosystem } from './webduinosystem';
import { WebduinosystemType } from './webduinosystemtype';
import { MessageService } from './message.service';
import { SensorType } from './sensortype';
import { Sensor } from './sensor';
import { WebduinosystemActuator } from './webduinosystemactuator';
//import { Zone } from './zone';
import { Service } from './service';
import { Scenario } from './scenario';
import { Program } from './program';
import { Trigger } from './trigger';
import { Zone } from './zone';
import { ZoneSensor } from './zonesensor';
//import { ZoneSensor } from './zonesensor';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

/** PUT: update the hero on the server */
export class WebduinoService {

   //private webduinosystemsUrl = 'http://giacomohome.ddns.net:9090/webduino/system?requestcommand=webduinosystems';
   //private webduinosystemUrl = 'http://giacomohome.ddns.net:9090/webduino/system?requestcommand=webduinosystem&id=';
   private webduinosystemUrl = 'http://localhost:8080/webduino/system';

   constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  /** GET sensortypes from the server */
  getSensorTypes (): Observable<WebduinosystemType[]> {
    return this.http.get<SensorType[]>(this.webduinosystemUrl + '?requestcommand=sensortypes')
      .pipe(
        tap(webduinosystemtypes => this.log('fetched sensortypes')),
        catchError(this.handleError('getSensortypes', []))
            );
  }

  getTriggers (): Observable<Trigger[]> {
    return this.http.get<Trigger[]>(this.webduinosystemUrl + '?requestcommand=triggers')
      .pipe(
        tap(triggers => this.log('fetched triggers')),
        catchError(this.handleError('triggers', []))
      );
  }

  getTrigger(id: number): Observable<Trigger> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=trigger&id=' + `${id}`;
    return this.http.get<Trigger>(url).pipe(
      tap(_ => this.log(`fetched trigger id=${id}`)),
      catchError(this.handleError<Trigger>(`getTrigger id=${id}`))
    );
  }

  /** GET sensors from the server */
  getSensors (): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.webduinosystemUrl + '?requestcommand=sensors')
      .pipe(
        tap(sensors => this.log('fetched sensors')),
        catchError(this.handleError('sensors', []))
      );
  }

   /** GET webduinosystem by id. Will 404 if id not found */
   getSensor(id: number): Observable<Sensor> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=sensor&id=' + `${id}`;
    return this.http.get<Sensor>(url).pipe(
      tap(_ => this.log(`fetched sensor id=${id}`)),
      catchError(this.handleError<Sensor>(`getSensor id=${id}`))
    );
  }

  /** GET webduinosystem by id. Will 404 if id not found */
  getZone(id: number): Observable<Zone> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=zone&id=' + `${id}`;
    return this.http.get<Zone>(url).pipe(
      tap(_ => this.log(`fetched zone id=${id}`)),
      catchError(this.handleError<Zone>(`getZone id=${id}`))
    );
  }

  getZoneSensor(zoneid:number, id: number): Observable<ZoneSensor> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=zonesensor&zoneid=' + zoneid + '&zonesensorid=' + `${id}`;
    return this.http.get<ZoneSensor>(url).pipe(
      tap(_ => this.log(`fetched zone id=${id}`)),
      catchError(this.handleError<ZoneSensor>(`getZoneSensor id=${id}`))
    );
  }

  getService(id: number): Observable<Service> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=service&id=' + `${id}`;
    return this.http.get<Service>(url).pipe(
      tap(_ => this.log(`fetched service id=${id}`)),
      catchError(this.handleError<Service>(`getService id=${id}`))
    );
  }

  getScenario(id: number): Observable<Scenario> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=webduinosystemscenario&id=' + `${id}`;
    return this.http.get<Scenario>(url).pipe(
      tap(_ => this.log(`fetched zone id=${id}`)),
      catchError(this.handleError<Scenario>(`getScenario id=${id}`))
    );
  }

  updateScenario(scenario: Scenario): Observable<any> {
    const url = this.webduinosystemUrl + '?data=webduinosystemscenario';
 
    //return this.http.post(url, webduinosystem, options)
    return this.http.post(url, scenario, httpOptions)
    .pipe(
       tap(_ => this.log(`updated scenario id=${scenario.id}`)),
       catchError(this.handleError<any>('updatescenario'))
     );
   }

   getProgram(id: number): Observable<Program> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=program&id=' + `${id}`;
    return this.http.get<Program>(url).pipe(
      tap(_ => this.log(`fetched program id=${id}`)),
      catchError(this.handleError<Program>(`getProgram id=${id}`))
    );
  }

  updateProgram(program: Program): Observable<any> {
    const url = this.webduinosystemUrl + '?data=program';
 
    return this.http.post(url, program, httpOptions)
    .pipe(
       tap(_ => this.log(`updated program id=${program.id}`)),
       catchError(this.handleError<any>('updateprogram'))
     );
   }




  updateSensor(sensor: Sensor): Observable<any> {
    const url = this.webduinosystemUrl + '?data=sensor';
 
    //return this.http.post(url, webduinosystem, options)
    return this.http.post(url, sensor, httpOptions)
    .pipe(
       tap(_ => this.log(`updated sensor id=${sensor.id}`)),
       catchError(this.handleError<any>('updatesensor'))
     );
   }

   /** POST: add a new sensor to the server */
  addSensor (sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.webduinosystemUrl, sensor, httpOptions).pipe(
      tap((sensor: Sensor) => this.log(`added sensor w/ id=${sensor.id}`)),
      catchError(this.handleError<Sensor>('addSensor'))
    );
  }

  /** DELETE: delete the sensor from the server */
  deleteSensor (sensor: Sensor | number): Observable<Sensor> {
    const id = typeof sensor === 'number' ? sensor : sensor.id;
    const url = `${this.webduinosystemUrl}/${id}`;

    return this.http.delete<Sensor>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted sensor id=${id}`)),
      catchError(this.handleError<Sensor>('deleteSensor'))
    );
  }

  /** GET webduinosystems from the server */
  getWebduinosystemTypes (): Observable<WebduinosystemType[]> {
    return this.http.get<WebduinosystemType[]>(this.webduinosystemUrl + '?requestcommand=webduinosystemtypes')
      .pipe(
        tap(webduinosystemtypes => this.log('fetched webduinosystemtypes')),
        catchError(this.handleError('getWebduinosystemtypes', []))
            );
  }
        
  /** GET webduinosystems from the server */
  getWebduinosystems (): Observable<Webduinosystem[]> {
      return this.http.get<Webduinosystem[]>(this.webduinosystemUrl + '?requestcommand=webduinosystems')
        .pipe(
          tap(webduinosystems => this.log('fetched webduinosystems')),
          catchError(this.handleError('getWebduinosystems', []))
        );
  }
  
   /** GET webduinosystem by id. Will 404 if id not found */
  getWebduinosystem(id: number): Observable<Webduinosystem> {
    const url = `${this.webduinosystemUrl}` + '?requestcommand=webduinosystem&id=' + `${id}`;
    return this.http.get<Webduinosystem>(url).pipe(
      tap(_ => this.log(`fetched webduinosystem id=${id}`)),
      catchError(this.handleError<Webduinosystem>(`getWebduinosystem id=${id}`))
    );
  }

  updateWebduinosystem(webduinosystem: Webduinosystem): Observable<any> {
    const url = this.webduinosystemUrl + '?data=webduinosystem';
 
    //return this.http.post(url, webduinosystem, options)
    return this.http.post(url, webduinosystem, httpOptions)
    .pipe(
       tap(_ => this.log(`updated webduinosystem id=${webduinosystem.id}`)),
       catchError(this.handleError<any>('updateWebduinosystem'))
     );
   }

   /** POST: add a new webduinosystem to the server */
   addWebduinosystem (webduinosystem: Webduinosystem): Observable<Webduinosystem> {
    return this.http.post<Webduinosystem>(this.webduinosystemUrl, webduinosystem, httpOptions).pipe(
      tap((hero: Webduinosystem) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Webduinosystem>('addHero'))
    );
  }

  /** DELETE: delete the webduinosystem from the server */
  deleteWebduinosystem (webduinosystem: Webduinosystem | number): Observable<Webduinosystem> {
    const id = typeof webduinosystem === 'number' ? webduinosystem : webduinosystem.id;
    const url = `${this.webduinosystemUrl}/${id}`;

    return this.http.delete<Webduinosystem>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted webduinosystem id=${id}`)),
      catchError(this.handleError<Webduinosystem>('deleteWebduinosystem'))
    );
  }


  updateWebduinosystemActuator(actuator: WebduinosystemActuator): Observable<any> {
    const url = this.webduinosystemUrl + '?data=webduinosystemactuator';
    return this.http.post(url, actuator, httpOptions)
    .pipe(
       tap(_ => this.log(`updated actuator id=${actuator.id}`)),
       catchError(this.handleError<any>('updateactuator'))
     );
   }

   /** POST: add a new sensor to the server */
  addWebduinosystemActuator (actuator: WebduinosystemActuator): Observable<Sensor> {
    return this.http.post<Sensor>(this.webduinosystemUrl + '?data=webduinosystemactuator', actuator, httpOptions).pipe(
      tap((sensor: Sensor) => this.log(`added sensor w/ id=${sensor.id}`)),
      catchError(this.handleError<Sensor>('addSensor',))
    );
  }

  /** DELETE: delete the sensor from the server */
  deleteWebduinosystemActuator (actuator: WebduinosystemActuator): Observable<Webduinosystem> {
    const url = this.webduinosystemUrl + '?data=webduinosystemactuator&param=delete';
    return this.http.post<Webduinosystem>(url, actuator, httpOptions).pipe(
      tap(_ => this.log(`deleted actuator id=${actuator.id}`)),
      //catchError(this.handleError<Webduinosystem>('deleteWebduinosystemActuator'))
      catchError(this.handleError('getHeroes', ))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error.error); // log to console instead

      window.alert('error: ' + error.error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`WebduinoserviceService: ${message}`);
  }

}
