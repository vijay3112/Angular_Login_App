import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './app.result.component.html',
  styleUrls: ['../../css/app.component.css']
})
export class LoginSuccessComponent implements OnInit {
	private message: string;
  
  constructor() {
	  this.message = "Successfully Logged into Application";
  }
  ngOnInit() {
	  
  }
}
