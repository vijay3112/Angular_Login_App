import { Component, OnInit } from '@angular/core';
import { LoginComponentService } from '../../service/login.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.home.component.html',
  styleUrls: ['../../css/app.component.css'],
  providers: [LoginComponentService]
})
export class HomeComponent implements OnInit {
	public userName: string;
    public password: string;
	public displayLoginBtnLbl = "SUBMIT";
	private message: string;
	public loginUser: any;
	
	title = 'Login Application';
  
  constructor(public loginService: LoginComponentService) {
	  
  }

  ngOnInit() {
	  
  }
  
  doLogin(formIn) {
      //console.log("Login, and here is the form for validation", formIn, 'here are the form controls for error messages', formIn.controls);
      if (formIn.valid) {
          if (this.userName != '' && this.password != '') {
        	  this.loginUser = {
        			  "userName": this.userName,
        			  "password": this.password
        	  }
        	  this.employerLogin(this.loginUser);
          }
      }
  }
  
  employerLogin(loginUser: any) {
	  if (loginUser != '') {
	  return this.loginService.loginCustomer(loginUser.userName, loginUser.password ).subscribe(res => {
          if (res.status === 200) {
        	  if (res.text() == 'true') {
        		  this.message = "Hey " + this.userName + " Welcome to Login Page.";
        		  //this.navigate.route("/success_page");
        	  } else {
        		  this.message = "Please validate given credentials";
        		  //this.nvaigate.route("/failure_page");
        	  }
          } else {
        	  alert("failure");
          }
	  },err => {
         alert("error");
      });
  } else {
      alert("invalid userName and password");
  }
  }

}
