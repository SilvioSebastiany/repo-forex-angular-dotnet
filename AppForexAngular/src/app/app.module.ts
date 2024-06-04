import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ParidadeService } from './paridade.service';
import { ParidadesComponent } from './Components/paridades/paridades.component';

@NgModule({
  declarations: [
    AppComponent,
    ParidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,         
    HttpClientModule,     
    ReactiveFormsModule   
  ],
  providers: [ParidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
