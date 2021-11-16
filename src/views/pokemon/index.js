import React, { useEffect, useState, useCallback } from 'react';
import AsideMenu from '../../components/AsideMenu';
import api from '../../services/api';
import limitPokemons from '../../utils/global-info'

import * as S from './styles';

//icones
import left from '../../assets/icons/left.png';
import right from '../../assets/icons/right.png';
import Search from '../../components/Search';
import typesIcons from '../../utils/typesIcons';
import { useParams } from 'react-router';
import RadarStatus from '../../components/graphs/RadarStatus';
import BarStatus from '../../components/graphs/BarStatus';
import LoadingSpinnerScreen from '../../components/LoadingSpinnerScreen';

const Pokemon = () => {
  const lastPokemonId = limitPokemons;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [idPokemon, setIdPokemon] = useState(id ? Number.parseInt(id, 10) : 1);
  const [btnRadar, setBtnRadar] = useState(false);
  const [btnBar, setBtnBar] = useState(true);
  window.history.pushState("", "", "/pokemon");


  const fetchPokemonById = useCallback(async () => {
    setLoading(true);
    try {
      const responsePokemon = await api.get(`/pokemon/${idPokemon}`);
      const { id, name, types, sprites, abilities, weight, height, stats } = responsePokemon.data;


      const objPokemon = {
        id,
        name,
        types,
        img: sprites.other.dream_world.front_default,
        abilities,
        weight,
        height,
        hp: stats[0].base_stat,
        atk: stats[1].base_stat,
        def: stats[2].base_stat,
        vel: stats[5].base_stat
      }
      setPokemon(objPokemon);
      setLoading(false);

    } catch (error) {
      alert('Error: falaha na conexão com a API');
      console.error(error);
    }
  }, [idPokemon])

  const graph = {
    radar() {
      if (btnRadar !== true) {
        setBtnRadar(true);
        setBtnBar(false);
      }
    },
    bar() {
      setTimeout(() => {
        console.log('bar value: ', btnBar);
      }, 1000);
      console.log('bar')
      if (btnBar !== true) {
        setBtnBar(true);
        setBtnRadar(false);
      }
    }
  }

  const pagination = {
    next() {
      let id = idPokemon;
      setIdPokemon(id += 1);
    },
    prev() {
      let id = idPokemon;
      setIdPokemon(id -= 1);
    }
  }

  useEffect(() => {
    fetchPokemonById();
  }, [fetchPokemonById])

  return (
    <S.Container>
      <S.Menu>
        <AsideMenu active={3} />
      </S.Menu>
      <S.Content>
        {
          loading && <LoadingSpinnerScreen />
        }
        <S.SearchArea>
          <Search setIdPokemon={setIdPokemon} />
        </S.SearchArea>

        <S.CardArea>
          <div className="arrow">
            <button disabled={idPokemon <= 1 && loading !== true} onClick={pagination.prev}>
              <img id="#left" src={left} alt="Anterior" />
            </button>
          </div>

          <S.Card>

            <S.TopCard className={pokemon.types && pokemon.types[0].type.name}>

              <div id="pokemon-name">
                <h1>{pokemon.name}</h1>
              </div>

              <div id="graph-image">
                <div id="pokemon-image">
                  <img src={pokemon.img} alt="pokemon" />
                </div>
                <div id="pokemon-status">
                  <div id="graph-content">
                    {
                      btnRadar ?
                        <RadarStatus hp={pokemon.hp} atk={pokemon.atk} def={pokemon.def} vel={pokemon.vel} />
                        :
                        <BarStatus hp={pokemon.hp} atk={pokemon.atk} def={pokemon.def} vel={pokemon.vel} />
                    }

                  </div>
                  <div id="graph-option">
                    <div id="buttons">
                      <button className={`btn bar ${btnBar && 'actived'}`} onClick={graph.bar} >barra</button>
                      <button className={`btn radar ${btnRadar && 'actived'}`} onClick={graph.radar} >radar</button>
                    </div>
                  </div>
                </div>
              </div>



            </S.TopCard>

            <S.BottomCard>
              <S.Types>
                {
                  pokemon.types && pokemon.types.map((item, i) =>
                    <div key={i} className="type">
                      <img className="img-type" src={typesIcons(item.type.name)} alt={item.type.name} />
                      <span className="name-type">{item.type.name}</span>
                    </div>)
                }
              </S.Types>

              <S.Abilities>
                <div id="title-abilities">Habilidades</div>
                <div id="names-abilities">
                  {pokemon.abilities && pokemon.abilities.map((item, i) => <div key={i} className="name-ability">{item.ability.name}</div>)}
                </div>

              </S.Abilities>

              <S.BodyInfo>
                <div className="info center">
                  {/* formatado para apresentar em decimais caso valor menor que 1 */}
                  <h2>{(pokemon.weight * 0.1).toFixed((pokemon.weight * 0.1) < 1 ? 1 : 0)}<sub>Kg</sub></h2>
                </div>
                <div className="info center">
                  <h2>{(pokemon.height * 0.1).toFixed((pokemon.height * 0.1) < 1 ? 1 : 0)}<sub>M</sub></h2>
                </div>
              </S.BodyInfo>

            </S.BottomCard>

          </S.Card>


          <div className="arrow">
            <button disabled={idPokemon >= lastPokemonId && loading !== true} onClick={pagination.next}>
              <img id="#right" src={right} alt="Próximo" />
            </button>
          </div>
        </S.CardArea>
      </S.Content>

    </S.Container >
  )
}

export default Pokemon;
