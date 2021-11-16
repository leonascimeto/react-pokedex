import React, { useState, useEffect } from 'react'
import * as S from './styles';
import api from '../../services/api';

//componenets
import TableGraph from '../../components/tables/TableGraphHome';
import CardInfo from '../../components/CardInfo';
import AsideMenu from '../../components/AsideMenu';
import TableMain from '../../components/tables/TableMainHome';
import LoadingSpinnerScreen from '../../components/LoadingSpinnerScreen';

const Home = () => {

  const [selectCard, setSelectCard] = useState('especies');
  const [cardValues, setCardValues] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleClick(cardSelected) {
    if (selectCard !== cardSelected)
      setSelectCard(cardSelected)
  }

  async function fetchTotalValues() {
    const querys = ['/pokemon-species', '/type', '/ability', '/location'];
    const arrayTotals = []
    Promise.all(querys.map(async item => arrayTotals.push(await api.get(item).then(res => res.data.count)))).then(() => setCardValues(arrayTotals));
  }

  useEffect(() => {
    fetchTotalValues();
  }, []);

  return (
    <S.Container>
      <S.Menu>
        <AsideMenu active={1} />

      </S.Menu>

      {
        loading && <LoadingSpinnerScreen />
      }
      <S.Content>
        <S.Cards>
          <button className="btn-cards .active" onClick={() => handleClick('especies')} >
            <CardInfo title="Especies" selectCard={selectCard} value={cardValues[0]} active={selectCard === 'especies'} />
          </button>
          <button className="btn-cards" onClick={() => handleClick('tipos')} >
            <CardInfo title="Tipos" selectCard={selectCard} value={cardValues[1]} active={selectCard === 'tipos'} />
          </button>
          <button className="btn-cards" onClick={() => handleClick('habilidades')} >
            <CardInfo title="Habilidades" selectCard={selectCard} value={cardValues[2]} active={selectCard === 'habilidades'} />
          </button>
          <button className="btn-cards" onClick={() => handleClick('localizacoes')} >
            <CardInfo title="Localizações" selectCard={selectCard} value={cardValues[3]} active={selectCard === 'localizacoes'} />
          </button>
        </S.Cards>

        <S.Main>
          <S.Table>
            <TableMain selectCard={selectCard} cardValues={cardValues} loading={loading} setLoading={setLoading} />
          </S.Table>
          <S.Graph>
            <TableGraph loading={loading} setLoading={setLoading} />
          </S.Graph>
        </S.Main>
      </S.Content>


    </S.Container>
  )
}

export default Home;
