import React from 'react'
import { Bar } from 'react-chartjs-2';


const BarPokemonsRanking = () => {
  return (
    <Bar
      data={{
        labels: ['shockwave', 'storm', 'fireball', 'icewave', 'windpunch'],
        datasets: [{
          label: 'Habilidade',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: '#8844EE',
        }],
      }}

      options={{
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  )
}

export default BarPokemonsRanking;
