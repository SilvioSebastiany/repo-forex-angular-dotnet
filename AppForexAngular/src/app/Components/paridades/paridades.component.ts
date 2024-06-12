import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParidadeService } from '../../paridade.service';
import { Paridade } from '../../Paridade';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-paridades',
  templateUrl: './paridades.component.html',
  styleUrl: './paridades.component.css'
})
export class ParidadesComponent implements OnInit{

  formulario:FormGroup;

  tituloFormulario?:string;
  paridades?: Paridade[];
  moedaParidade?: string ="";
  paridadeId: number = 0;

  visibilidadeTabela:boolean = true;
  visibilidadeFormulario:boolean = false;

  modalRef?: BsModalRef;

  constructor(private paridadeService : ParidadeService, private formBuilder: FormBuilder, private modalService: BsModalService){
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

  ExibirFormularioAtualizacao(paridadeId: any):void  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.paridadeService.PegarPeloId(paridadeId).subscribe(resultado => {
      this.tituloFormulario = `Atualizar moeda ${resultado.moeda}`;

      this.formulario = this.formBuilder.group({ 
        paridadeId:[resultado.paridadeId], 
        moeda: [resultado.moeda, Validators.required], 
        preco: [resultado.preco, Validators.required],
        swap: [resultado.swap, Validators.required],
      });
    });
  }

  EnviarFormulario(): void {
    if (this.formulario.valid) { 
      const paridade: Paridade = this.formulario.value;

      if(paridade.paridadeId){
        this.paridadeService.AtualizarParidade(paridade).subscribe(resultado =>{
            this.visibilidadeTabela = true;
            this.visibilidadeFormulario = false;
            alert('Pessoa atualizada com sucesso');
            this.paridadeService.PegarTodos().subscribe(registro => {
              this.paridades = registro;
            });

        });
      } 
      else {
        this.paridadeService.SalvarParidade(paridade).subscribe(resultado => {
          this.visibilidadeTabela = true;
          this.visibilidadeFormulario = false;
          alert('Paridade inserida com sucesso');
        });
      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  Voltar():void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

   ExibirConfirmacaoExclusao(paridadeId: number, moedaParidade: string, conteudoModal:TemplateRef<any>): void {
     this.modalRef = this.modalService.show(conteudoModal);
    this.paridadeId = paridadeId;
    this.moedaParidade = moedaParidade;
  }

  ExcluirParidade(paridadeId: number){
    this.paridadeService.ExcluitPeloId(paridadeId).subscribe(resultado => {
      this.modalRef?.hide();
      alert("Paridade excluída com sucesso");
      this.paridadeService.PegarTodos().subscribe(registro => {
        this.paridades = registro;
      });
    }) 
  }
}
