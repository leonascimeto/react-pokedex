import React from 'react';
import { Radar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

Chart.register(ChartDataLabels);



const RadarStatus = ({ hp, atk, def, vel }) => {
  const data = {
    labels: ['HP', 'ATK', 'DEF', 'VEL'],
    datasets: [
      {
        label: 'stats',
        data: [hp, atk, def, vel],
        backgroundColor: 'rgba(136, 68, 238, 0.2)',
        borderColor: 'rgba(32, 16, 48, 1)',
        borderWidth: 2,
      },
    ],
  }

  const options = {
    scales: {
      ticks: {
        display: false,
        font: {
          size: 15
        }
      },
      r: {
        backgroundColor: '#8844EE',
        pointLabels: {
          font: {
            size: 16,
          }
        },
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
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
    aspectRatio: 4 / 4,
    elements: {
      point: {
        hoverRadius: 1,
        radius: 10
      }
    },
  };


  return (
    <Radar data={data} options={options} />
  )
}

export default RadarStatus;
