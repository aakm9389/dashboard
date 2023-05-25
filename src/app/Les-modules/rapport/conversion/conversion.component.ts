import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  public options: any = {
  Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Taux de conversion'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [2018, 2019, 2020, 2021, 2022],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Taux de conversion',
      data: [302, 175, 199, 227, 202]
  }
]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('contConversion', this.options);
  }
}
