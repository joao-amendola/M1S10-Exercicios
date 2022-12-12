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
  
  public get filtroId(){
    return this.route.snapshot.paramMap.get('id')
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  notificacoesFiltradas:INotificacao[] = []
  
  ngOnInit(): void {
    this.notificacoesFiltradas = NOTIFICATIONS_MOCK
  }

  filtroSelecionado(event:any, filtroClicado:string) {
    this.filtrarNotificacoes.emit(filtroClicado)
    this.router.navigate(['/home', filtroClicado])
  }
}
