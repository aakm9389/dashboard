import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-canaux',
  templateUrl: './canaux.component.html',
  styleUrls: ['./canaux.component.css']
})
export class CanauxComponent {
  public options: any = {
    chart : {
      plotBorderWidth: null,
      plotShadow: false
   },
   title : {
      text: 'Nos meilleurs canaux de communication depuis 5 ans :'   
   },
   tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
   plotOptions : {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
               color: 'black'
            }
         }
      }
   },
   series : [{
      type: 'pie',
      name: 'Pourcentage de client ',
      data: [
         ['Resaux sociaux',   45.0],
         ['Mail',       26.8],
         {
            name: 'Recherche organique',
            y: 12.8,
            sliced: true,
            selected: true
         },
         ['Bouche à bouche',    8.5],
         ['Autres',      6.9]
      ]
   }]
};
  constructor() { }
  ngOnInit() {
    Highcharts.chart('containerCanaux', this.options);
  }
}

