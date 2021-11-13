import React, { useState } from 'react'
import * as S from './styles';

//componenets
import TableGraph from '../../components/tables/TableGraphHome';
import CardInfo from '../../components/CardInfo';
import AsideMenu from '../../components/AsideMenu';
import TableMain from '../../components/tables/TableMainHome';

const Home = () => {

  const [selectCard, setSelectCard] = useState('especies');

  function handleClick(cardSelected) {
    if (selectCard !== cardSelected)
      setSelectCard(cardSelected)
  }

  return (
    <S.Container>
      <AsideMenu active={1} />
      <S.Content>
        <S.Cards>
          <button className="btn-cards .active" onClick={() => handleClick('especies')} >
            <CardInfo title="Especies" selectCard={selectCard} value={1125} active={selectCard === 'especies'} />
          </button>
          <button className="btn-cards" onClick={() => handleClick('habilidades')} >
            <CardInfo title="Habilidades" selectCard={selectCard} value={500} active={selectCard === 'habilidades'} />
          </button>
          <button className="btn-cards" onClick={() => handleClick('tipos')} >
            <CardInfo title="Tipos" selectCard={selectCard} value={825} active={selectCard === 'tipos'} />
          </button>
          <button className="btn-cards" onClick={() => handleClick('localizacoes')} >
            <CardInfo title="Localizações" selectCard={selectCard} value={1045} active={selectCard === 'localizacoes'} />
          </button>
        </S.Cards>
        <S.Main>
          <S.Table>
            <TableMain selectCard={selectCard} />
          </S.Table>
          <S.Graph>
            <TableGraph />
          </S.Graph>
        </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Home
