import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Group } from './group';
import { environment } from '../../../environments/environment';

@Injectable()
export class GroupService {

  endpoint: string = `${environment.groupsEndpoint}/groups`;

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Group[]> {
    return this.http.get(this.endpoint)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getGroup(id: string): Observable<Group> {
    return this.http.get(`${this.endpoint}/${id}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  createGroup(name: string): Observable<Group> {
    return this.http.post(this.endpoint, { name }, this.getJsonHeaders())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateGroup(group: Group): Observable<Group> {
    return this.http.put(`${this.endpoint}/${group.id}`, group, this.getJsonHeaders())
                    .map(this.extractData)
                    .catch(this.handleError);
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

  private getJsonHeaders(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}
