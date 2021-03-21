import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [
    // HomeComponent,
    NavbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    MainContentComponent,
  ]

})
export class HomeModule { }
