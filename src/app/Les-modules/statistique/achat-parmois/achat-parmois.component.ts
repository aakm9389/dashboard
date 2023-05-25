import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-achat-parmois',
  templateUrl: './achat-parmois.component.html',
  styleUrls: ['./achat-parmois.component.css']
})
export class AchatParmoisComponent {
  public options: any = {
    chart: {
      type: 'column'
   },
   title: {
      text: 'Achat d\'articles par mois '
   },
   subtitle : {
      text: 'Source : Ikaboutiki.com'  
   },
   colors:['#FFC107'],
   legend : {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 50,
      floating: true,
      borderWidth: 1,
     
      backgroundColor: ( 
            '#FFFFFF'), shadow: true
   },
   xAxis:{
      categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'], 
      title: {
         text: null
      } 
   },
   yAxis : {
    categories: [0],
      min: 0,
      title: {
         text: 'Quantités achétées',
         align: 'high'
      },
      labels: {
         overflow: 'justify'
      }
   },
   tooltip : {
      valueSuffix: ' articles'
   },
   plotOptions : {
      column: {
         dataLabels: {
            enabled: true
         }
      },
      series: {
         stacking: 'normal'
      }
   },
   credits:{
      enabled: false
   },
   series: [
      {
         name: 'Quantités Achetées :',
         data: [400, 540, 330,130, 60, 80, 50, 190, 131, 140, 130, 150]
      }
      
   ]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('containerAchat', this.options);
  }
}
