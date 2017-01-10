import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

    endpoint: string = `${environment.usersEndpoint}/groups`;

    constructor(
    private http: Http
  ) { }
  
  addUserToGroup(user: any, id: string): Observable<User>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.endpoint}/${id}/users`, user, options)
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
}
