import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/homepage/app.home.component';
import { LoginFailureComponent } from '../pages/resultpage/app.failure.component';
import { LoginSuccessComponent } from '../pages/resultpage/app.success.component';

/*@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['PaymentStart'] }
    ])*/

const appRoutes: Routes = [
	  { path: 'successPage', component: LoginSuccessComponent },
	  { path: 'failurePage', component: LoginFailureComponent }
	];
    
@NgModule({
  declarations: [
	  HomeComponent,
	  LoginSuccessComponent,
	  LoginFailureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
    	      appRoutes,
    	      { enableTracing: true } // <-- debugging purposes only
    	    )
  ],
  providers: [],
  bootstrap: [HomeComponent ]
})

export class AppLoginModule { }
