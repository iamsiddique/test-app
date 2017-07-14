import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HelloService {

  constructor(private  http: Http) { 
  	this.http = http;
  }
  restcountrysvc() {
  	console.log('svc test');
		let apiUrl = 'https://restcountries.eu/rest/v2/all';
		return this.http.get(apiUrl).map((response) => {
			console.log(response.json());
			var result = response.json();
			var permissions = result.permissions;
			return result;
		});
	};
}
