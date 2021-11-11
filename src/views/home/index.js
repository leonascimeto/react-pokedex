import React from 'react'
import AsideMenu from '../../components/AsideMenu';
import CardInfo from '../../components/CardInfo';
import * as S from './styles';

//icons
import pokemon from '../../assets/icons/pokemon.png'
import habilidades from '../../assets/icons/bolt.png'
import ChartBar from '../../components/ChartBar';

const Home = () => {
  return (
    <S.Container>
      <AsideMenu active={1} />
      <S.Content>
        <S.Cards>
          <CardInfo title="Pokemons" value={1125} />
          <CardInfo title="Habilidades" value={500} />
          <CardInfo title="Categorias" value={825} />
          <CardInfo title="Localizações" value={1045} />
        </S.Cards>
        <S.Main>
          <S.Table>
            <div className="header">
              <span>Pokemons</span>
              <img src={pokemon} alt="Pokemon" />
            </div>
            <div className="titles">
              <span>Especie</span>
              <span>Caracteristica</span>
            </div>
            <div className="content">
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>
              <div className="row">
                <span>Charizard</span>
                <span>Come demais</span>
              </div>

            </div>
          </S.Table>
          <S.Graph>
            <div className="header">
              <span>Habilidades mais utilizadas</span>
              <img src={habilidades} alt="habilidades" />
            </div>
            <div className="content">
              <div className="chartBar">
                <ChartBar />
              </div>
            </div>
          </S.Graph>
        </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Home
