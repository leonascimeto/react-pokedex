import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

Chart.register(ChartDataLabels);


const BarStatus = ({ hp, atk, def, vel }) => {

  const data = {
    labels: ['HP', 'ATK', 'DEF', 'VEL'],
    datasets: [
      {
        label: 'stats',
        data: [hp, atk, def, vel],
        backgroundColor: '#0052b6',
        datalabels: {
          align: 'center',
          anchor: 'end'
        }
      }
    ],
  }

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#201030',
      },
      datalabels: {
        backgroundColor: '#000',
        color: 'white',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: Math.round,
        padding: 8
      }
    },
    aspectRatio: 5 / 3,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      },
      ticks: {
        display: false,
        font: {
          size: 15
        }
      },
    }
  }

  return (
    <Bar data={data} options={options} />
  )
}

export default BarStatus;
