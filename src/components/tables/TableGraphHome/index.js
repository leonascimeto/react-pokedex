import React from 'react';
import * as S from './styles';

import habilidades from '../../../assets/icons/bolt.png'
import BarPokemonsRanking from '../../graphs/BarPokemonsRanking';

const TableGraph = () => {
  return (
    <S.Container>
      <div className="header">
        <span>Habilidades mais utilizadas</span>
        <img src={habilidades} alt="habilidades" />
      </div>
      <div className="content">
        <div className="chartBar">
          <BarPokemonsRanking />
        </div>
      </div>
    </S.Container>
  )
}

export default TableGraph;
