import React, { useState } from 'react';
import * as S from './styles';
import api from '../../../services/api';
import totalPokemons from '../../../utils/global-info';

import BarPokemonsRanking from '../../graphs/BarPokemonsRanking';

import heart from '../../../assets/icons/heart.png';
import sword from '../../../assets/icons/sword.png';
import shield from '../../../assets/icons/shield.png';
import run from '../../../assets/icons/run.png';
import { useEffect } from 'react/cjs/react.development';

const TableGraph = ({ loading, setLoading }) => {
  const [btnActive, setBtnActive] = useState('hp');
  const [allPokemons, setAllPokemons] = useState([]);
  const [ranking, setRanking] = useState({});

  async function fetchStatsAllPokemons() {
    setLoading(true);
    try {
      //const total = await api.get('/pokemon').then(res => res.data.count);
      const total = totalPokemons;
      const allPromises = await api.get(`/pokemon?limit=${648}`).then(res => res.data.results);

      const arrayStats = [];


      Promise.all(allPromises.map(async item => {
        const response = await api.get(item.url);

        const { id, name, stats } = response.data;

        const objPokemon = {
          id,
          name,
          hp: stats[0].base_stat,
          atk: stats[1].base_stat,
          def: stats[2].base_stat,
          vel: stats[5].base_stat,
        }

        arrayStats.push(objPokemon);

      })).then(() => setAllPokemons(arrayStats)).then(() => setLoading(false));

    } catch (err) {
      alert('Error: falha na conexão com os dados do gráfico')
    }

  }

  function identifyIcon() {
    switch (btnActive) {
      case 'hp':
        return heart;
      case 'atk':
        return sword
      case 'def':
        return shield;
      case 'vel':
        return run;
      default:
        return;
    }
  }

  function rankingPokemon() {
    let orderList;
    let filter;

    switch (btnActive) {
      case 'hp':
        orderList = allPokemons && allPokemons.sort((a, b) => b.hp - a.hp);
        filter = 'hp';
        break;
      case 'atk':
        orderList = allPokemons && allPokemons.sort((a, b) => b.atk - a.atk);
        filter = 'atk';
        break;
      case 'def':
        orderList = allPokemons && allPokemons.sort((a, b) => b.def - a.def);
        filter = 'def';
        break;
      case 'vel':
        orderList = allPokemons && allPokemons.sort((a, b) => b.vel - a.vel);
        filter = 'vel';
        break;
      default:
        return;
    }
    const topFive = orderList.slice(0, 5);

    const rankingObj = {
      filter,
      topFive
    }

    setRanking(rankingObj);
  }

  function handleClick(option) {
    if (btnActive !== option)
      setBtnActive(option)
  }

  useEffect(() => {
    fetchStatsAllPokemons();
  }, []);

  useEffect(() => {
    rankingPokemon();
  }, [btnActive, allPokemons]);

  return (
    <S.Container btnActive={btnActive}>

      <div className="header">
        <div id="title">
          <span>Top 5 Pokemons</span>
          <img src={identifyIcon()} alt="habilidades" />
        </div>
        <div id="filters">
          <div id="buttons">
            <button className="btn hp first" onClick={() => handleClick('hp')} >hp</button>
            <button className="btn atk" onClick={() => handleClick('atk')} >atk</button>
            <button className="btn def" onClick={() => handleClick('def')} >def</button>
            <button className="btn vel last" onClick={() => handleClick('vel')} >vel</button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="chartBar">
          {ranking && <BarPokemonsRanking ranking={ranking} />}
        </div>
      </div>
    </S.Container>
  )
}

export default TableGraph;
