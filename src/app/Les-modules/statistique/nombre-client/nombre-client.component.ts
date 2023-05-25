import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;


@Component({
  selector: 'app-nombre-client',
  templateUrl: './nombre-client.component.html',
  styleUrls: ['./nombre-client.component.css']
})
export class NombreClientComponent {
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Nombre de client par mois'
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
      name: 'Clients ',
      data: [44, 31, 14, 25, 19, 118, 111, 160, 109, 76,130, 120]
  }]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('containerNbreClient', this.options);
  }
}
