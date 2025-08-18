import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { OptionComponent } from './option/option.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

 {component:HomeComponent,path:""},
 {component:NavbarComponent,path:"navbar"},
 {component:LoginComponent,path:"login"},
 {component:RegisterComponent,path:"register"},
 {component:ServicesComponent,path:"services"},
 {component:OptionComponent,path:"option"},
 {component:ContactComponent,path:"contact"}
];
