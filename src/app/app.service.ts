import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService  {
constructor(private http: Http) { }
 getProfile(): Promise<any> {
    return this.http.get('https://manishjanky.github.io/profile.json')
               .toPromise()
               .then(response => response.json() as Object)
  }
}