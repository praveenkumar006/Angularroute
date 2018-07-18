import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { MulComponent } from './mul/mul.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path:'addition',component:AddComponent},
        {path:'subtraction',component:SubComponent},
        {path:'multiplication',component:MulComponent},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent}
      ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }