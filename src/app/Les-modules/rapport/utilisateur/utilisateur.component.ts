import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  public options: any = {
    Chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Utilisateurs'
    },
    subtitle : {
       style: {
          position: 'absolute',
          right: '0px',
          bottom: '10px'
       }
    },
    legend : {
       layout: 'vertical',
       align: 'left',
       verticalAlign: 'top',
       x: -150,
       y: 100,
       floating: true,
       borderWidth: 1,
      
       backgroundColor: (
          Highcharts.theme && Highcharts.theme.legend) || 
            '#000'
    },
    xAxis:{
       categories: [2018, 2019, 2020, 2021, 2022] 
    },
    yAxis : {
       title: {
          text: 'Nombre d\'utilisateurs'
       }
    },
    tooltip : {
       shared: true, valueSuffix: ' utilisateurs'
    },
    plotOptions : {
       area: {
          fillOpacity: 0.5 
       }
    },
    credits:{
      enabled: false
    },
    series: [
       {
          name: 'Utilisateurs',
          data: [160, 70, 120, 200, 185 ]
       }
    ]
 }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('containerUser', this.options);
  }
}
