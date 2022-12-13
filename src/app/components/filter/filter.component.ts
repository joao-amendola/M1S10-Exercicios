import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {INotificacao} from 'src/app/models/notificacao.model'

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  options = ['todos', 'nao-lidos', 'lidos']
  @Output() filtrarNotificacoes = new EventEmitter<string>()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  notificacoesFiltradas:INotificacao[] = []
  
  ngOnInit(): void {
  }

  filtroSelecionado(event:any, filtroClicado:string) {
    this.filtrarNotificacoes.emit(filtroClicado)
    this.router.navigate(['/home', filtroClicado])
  }
}
