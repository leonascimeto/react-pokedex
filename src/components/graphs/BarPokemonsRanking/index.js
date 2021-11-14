import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react/cjs/react.development';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

Chart.register(ChartDataLabels);

const BarPokemonsRanking = ({ ranking }) => {

  const [data, setData] = useState({});


  useEffect(() => {
    const { filter, topFive } = ranking;

    let dataList;

    switch (filter) {
      case 'hp':
        dataList = topFive.map(item => item.hp);
        break;
      case 'atk':
        dataList = topFive.map(item => item.atk);
        break;
      case 'def':
        dataList = topFive.map(item => item.def);
        break;
      case 'vel':
        dataList = topFive.map(item => item.vel);
        break;
      default:
        return;
    }

    const names = topFive.map((item, i) => (i + 1) + ' - ' + item.name);

    setData(
      {
        labels: [...names],
        datasets: [{
          label: ranking.filter,
          data: [...dataList],
          backgroundColor: 'rgba(136, 68, 238, 0.2)',
          borderColor: 'rgba(32, 16, 48, 1)',
          borderWidth: 2,
          datalabels: {
            align: 'center',
            anchor: 'end'
          }
        }],
      }
    )


  }, [ranking]);

  const options = {
    indexAxis: 'y',
    scales: {
      ticks: {
        display: false,
        font: {
          size: 15
        }
      },
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
    aspectRatio: 5 / 3,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }

  return (
    <Bar
      data={data}

      options={options}
    />
  )
}

export default BarPokemonsRanking;
