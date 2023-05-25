import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-venteparmois',
  templateUrl: './venteparmois.component.html',
  styleUrls: ['./venteparmois.component.css']
})
export class VenteparmoisComponent {
  public options: any = {
    chart: {
      type: 'column'
   },
   title: {
      text: 'Vente d\'articles par mois '
      
   },
   subtitle : {
      text: 'Source : Ikaboutiki.com'  
   },
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
   colors:['#FFC107'],
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
         text: 'Quantités vendues',
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
         name: 'Quantités vendues :',
         data: [200, 240, 100,530, 60, 80, 50, 190, 131, 450, 130, 332]
      }
      
   ]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
