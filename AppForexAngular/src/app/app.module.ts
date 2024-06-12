import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ParidadeService } from './paridade.service';
import { ParidadesComponent } from './Components/paridades/paridades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importação necessária
import { ModalModule } from 'ngx-bootstrap/modal'; // Importação do ngx-bootstrap modal

@NgModule({
  declarations: [
    AppComponent,
    ParidadesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Adicione esta linha
    AppRoutingModule,
    CommonModule,         
    HttpClientModule,     
    ReactiveFormsModule,
    ModalModule.forRoot() // Certifique-se de configurar o ngx-bootstrap modal
  ],
  providers: [ParidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
