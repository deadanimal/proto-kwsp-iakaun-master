import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import { Router } from '@angular/router';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

// such override allows to keep some initial values
 
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Chart
  private chart: any
  private chart1: any
  private chart2: any
  private clicked: any = true
  private clicked1: any = false

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart2.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartDashboardDonut ()
    })
  }

  getChartDashboardDonut () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdashboarddonut1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Akaun 1",
        litres: 601.9
      },
      {
        country: "Akaun 2",
        litres: 201.9
      },
      
    ];

    chart.innerRadius = 100;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart2 = chart;
  }

}
