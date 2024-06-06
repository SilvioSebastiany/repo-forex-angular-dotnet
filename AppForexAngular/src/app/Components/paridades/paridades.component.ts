import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParidadeService } from '../../paridade.service';
import { Paridade } from '../../Paridade';

@Component({
  selector: 'app-paridades',
  templateUrl: './paridades.component.html',
  styleUrl: './paridades.component.css'
})
export class ParidadesComponent implements OnInit{


  formulario:FormGroup;
  tituloFormulario:string = "";
  paridades: Paridade[] = [];

  visibilidadeTabela:boolean = true;
  visibilidadeFormulario:boolean = false;

  constructor(private paridadeService : ParidadeService, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      moeda: [null, Validators.required],
      preco: [null, Validators.required],
      swap: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Paridade';

    this.paridadeService.PegarTodos().subscribe(resultado => {
      this.paridades = resultado;
    });
  }

  ExibirFormularioCadastro(): void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Nova Paridade';
    this.formulario = this.formBuilder.group({ // Use formBuilder.group para inicializar o FormGroup
      moeda: [null, Validators.required],
      preco: [null, Validators.required],
      swap: [null, Validators.required]
    });
  }

  EnviarFormulario(): void {
    if (this.formulario.valid) { 
      const paridade: Paridade = this.formulario.value;
      this.paridadeService.SalvarParidade(paridade).subscribe(resultado => {
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
        alert('Paridade inserida com sucesso');
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  Voltar():void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

}
