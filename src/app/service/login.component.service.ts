import {Component} from '@angular/core';
import {Injectable, Injector, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginComponentService {
    constructor(private _http: Http) {
    }
    loginCustomer(_userName: string, _password: string) {
    	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        
        return this._http.post('http://localhost:8080/employee/login', JSON.stringify({
            "userName": _userName,
            "password": _password
        }), options);
    }
}