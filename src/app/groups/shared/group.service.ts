import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Group } from './group';
import { FULL_GROUP } from './mock-data';
import { environment } from '../../../environments/environment';

@Injectable()
export class GroupService {

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Group[]> {
    return this.http.get(`${environment.groupsEndpoint}/groups`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getGroup(id: number): Group {
    return FULL_GROUP[0];
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || { };
  }

  private handleError(error: Response | any): any {
    let message: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      message = `${error.statusText || ''} ${err}`;
    } else {
      message = error.message ? error.message : error.troString();
    }
    console.error(message);
    return Observable.throw(message);
  }
}
