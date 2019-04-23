import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure',
  templateUrl: './app.result.component.html',
  styleUrls: ['../../css/app.component.css']
})
export class LoginFailureComponent implements OnInit {
	private message: string;
  
  constructor() {
	  this.message = "Please user valid Credentials";
  }
  ngOnInit() {
	  
  }
}
