import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit {
  public reports: Report[] = [
    {
      skill: '.NET',
      data: [26, 26, 16, 26, 0, 8, 5, 15, 20, 5, 8, 16]
    },
    {
      skill: 'Java',
      data: [24, 13, 6, 30, 10, 13, 20, 21, 29, 7, 13, 17]
    },
    {
      skill: 'Custom',
      data: [26, 5, 11, 0, 1, 3, 25, 12, 18, 1, 29, 13]
    },
    {
      skill: 'SDET',
      data: [27, 16, 12, 24, 2, 27, 19, 0, 19, 19, 28, 23]
    }
  ];

  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dataSource = new MatTableDataSource(this.reports);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('traineeChartThisYear') traineeChartThisYear: ElementRef;
  @ViewChild('traineeChartNextYear') traineeChartNextYear: ElementRef;

  chart1: Highcharts.ChartObject;
  chart2: Highcharts.ChartObject;

  options = {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true,
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Graduates',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} trainees</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 0,
      floating: false,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Java',
        data: [0, 22, 0, 0, 22, 44, 0, 0, 0]
      },
      {
        name: '.NET',
        data: [0, 0, 0, 22, 44, 110, 22, 22, 0]
      },
      {
        name: 'SDET',
        data: [110, 66, 110, 66, 66, 22, 176, 220, 198]
      },
      {
        name: 'Custom',
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.chart1 = chart(this.traineeChartThisYear.nativeElement, this.options);
    this.chart2 = chart(this.traineeChartNextYear.nativeElement, this.options);
    this.updateData();
  }

  updateData() {
    const data = [];
    for (const val of this.reports) {
      data.push({
        name: val.skill,
        data: val.data
      });
    }
    const options1 = this.options;
    options1.series = data;
    options1.title.text = 'Graduate Summary for 2017';
    this.chart1 = chart(this.traineeChartThisYear.nativeElement, options1);

    const options2 = this.options;
    options2.series = data;
    options2.title.text = 'Incoming Trainee Summary for 2018';
    this.chart2 = chart(this.traineeChartNextYear.nativeElement, options2);
  }
}

export interface Report {
  skill: string;
  data: number[];
}
