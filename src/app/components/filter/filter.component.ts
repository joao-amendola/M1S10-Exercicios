import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';
import {INotificacao} from 'src/app/models/notificacao.model'
import {routes} from 'src/app/app-routing.module'

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  options = ['todos', 'nao-lidos', 'lidos']
  @Output() filtrarNotificacoes = new EventEmitter<string>()
  
  // solucao 1: getter para pegar o parametro da URL
  public get filtroId(){
    return this.route.snapshot.paramMap.get('id')
  }

  //solucao 2: 'id' no construtor e subscribe no OnInit
  public id: string | null

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){
    //solucao 2: 'id' no construtor e subscribe no OnInit
    this.id = this.route.snapshot.paramMap.get('id')
  }
  
  notificacoesFiltradas:INotificacao[] = []
  
  ngOnInit(): void {
    //solucao 2: 'id' no construtor e subscribe no OnInit
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id')
    })
    
    this.notificacoesFiltradas = NOTIFICATIONS_MOCK
  }

  filtroSelecionado(event:any, filtroClicado:string) {
    this.filtrarNotificacoes.emit(filtroClicado)
    this.router.navigate(['/home', filtroClicado])
    if (filtroClicado == "lidos"){
      console.log("Lidos");
      this.notificacoesFiltradas = this.notificacoesFiltradas.filter((element) => element.lido == true)
      console.log(this.notificacoesFiltradas)
    }
    else if (filtroClicado == "nao-lidos"){
      console.log("Não lidos");
      
    }
    else {
      console.log("Todos")
    }

  }
}
