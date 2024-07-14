import  { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart= () => {
  const [chartData] = useState({
    series: [{
      name: 'Donner',
      type: 'column',
      data: [ 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
      name: 'Spend-Donnetion',
      type: 'column',
      data: [4, 4.1, 4.9, 6.5, 8.5]
    }, {
      name: 'Success',
      type: 'line',
      data: [20, 29, 37, 36, 44]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'XYZ - Donnetion Analysis (2020 - 2024)',
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: [2020, 2021, 2022, 2023, 2024],
      },
      yaxis: [
        {
          min: 0,
          seriesName: 'Success',
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
          },
          title: {
            text: "Donner",
            style: {
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          min: 0,
          seriesName: 'Spend-Donnetion',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396',
            }
          },
          title: {
            text: "Spend-Donnetion-overflow (thousand crores)",
            style: {
              color: '#00E396',
            }
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019'
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: "Success-Our mission (thousand crores)",
            style: {
              color: '#FEB019',
            }
          }
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
