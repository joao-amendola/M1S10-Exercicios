import { Component, OnInit } from '@angular/core';
import { INotificacao } from 'src/app/models/notificacao.model';
import { ActivatedRoute, Router } from "@angular/router";
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';

@Component({
  selector: 'ntap-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit {
  listaDeNotificacoes: INotificacao[] = NOTIFICATIONS_MOCK;
  listaDeNotificacoesToRender: INotificacao[] = []
  listFilter = ''
  options = []
  public id: string | null

  constructor( private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id')

    if(this.id == 'lidos'){
      this.listaDeNotificacoesToRender = this.listaDeNotificacoes.filter((element) => element.lido == true)
    }
    else if (this.id == 'nao-lidos'){
      this.listaDeNotificacoesToRender = this.listaDeNotificacoes.filter((element) => element.lido == false)
    }
    else {
      this.listaDeNotificacoesToRender = this.listaDeNotificacoes      
    }
  })}

  lerNotificacao(indice: number) {
    console.log('indice', indice);

    this.listaDeNotificacoesToRender.forEach((item, index) => {
      if (index === indice) {
        item.lido = true;
      }

      return item;
    });
  }
}
