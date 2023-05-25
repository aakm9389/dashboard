import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-commande-par-mois',
  templateUrl: './commande-par-mois.component.html',
  styleUrls: ['./commande-par-mois.component.css']
})
export class CommandeParMoisComponent {
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Nombre de commande effectué par mois'
    },
    colors:['#FFC107'],
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Septembre', 'Octobre', 'Novembre', 'Décembre'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [ {
      name: 'Commandes : ',
      data: [114, 31, 154, 126, 110, 418, 501, 460, 509, 76,130, 120]
  }]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('containerCommande', this.options);
  }

}
