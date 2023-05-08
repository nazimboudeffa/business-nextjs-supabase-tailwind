import { Component } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class ChartDatetime extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [
            [1361746800000,0],
            [1361833200000,0],
            [1361919600000,0]
          ]
        }],
        options: {
          chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
              autoScaleYaxis: true
            }
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "#fff",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }]
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },
      
      
        selection: 'one_year',
      
      };
    }

  
    updateData(timeline) {
      this.setState({
        selection: timeline
      })
    
      switch (timeline) {
        case 'one_month':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('28 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'six_months':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Sep 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'one_year':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'ytd':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'all':
          ApexCharts.exec(
            'area-datetime',
            'zoomX',
            new Date('23 Jan 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        default:
      }
    }
  

    render() {
      return (
        <div id="chart">
            <div className="toolbar">
            <button id="one_month"
                
                onClick={()=>this.updateData('one_month')} className={ (this.state.selection==='one_month' ? 'active' : '')}>
            1M
            </button>
            &nbsp;
            <button id="six_months"
                
                onClick={()=>this.updateData('six_months')} className={ (this.state.selection==='six_months' ? 'active' : '')}>
            6M
            </button>
            &nbsp;
            <button id="one_year"
                
                
                onClick={()=>this.updateData('one_year')} className={ (this.state.selection==='one_year' ? 'active' : '')}>
            1Y
            </button>
            &nbsp;
            <button id="ytd"
                
                onClick={()=>this.updateData('ytd')} className={ (this.state.selection==='ytd' ? 'active' : '')}>
            YTD
            </button>
            &nbsp;
            <button id="all"
                
                onClick={()=>this.updateData('all')} className={ (this.state.selection==='all' ? 'active' : '')}>
            ALL
            </button>
            </div>
            <div id="chart-timeline">
                <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        </div>
        )
    }
}

export default ChartDatetime