import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paridades',
  templateUrl: './paridades.component.html',
  styleUrl: './paridades.component.css'
})
export class ParidadesComponent implements OnInit{

  formulario: any;
  tituloFormulario? :string;

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Paridade';
    this.formulario = new FormControl({
      paridadeId: new FormControl(null),
      moeda: new FormControl(null),
      preco: new FormControl(null),
      swap: new FormControl(null),
    });
  }

}
