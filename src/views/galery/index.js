import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import api from '../../services/api';
import limitPokemons from '../../utils/global-info';

//componenentes
import AsideMenu from '../../components/AsideMenu';
import CardGalery from '../../components/CardGalery';
import Pagination from '../../components/Pagination';
import LoadingSpinnerScreen from '../../components/LoadingSpinnerScreen';


const Galery = () => {
  const [page, setPage] = useState(1);
  const [pokemonsList, setPokeonList] = useState([]);
  const peerPage = 20;
  const totalPokemons = limitPokemons;
  const totalPages = Math.ceil(totalPokemons / peerPage);
  const [loading, setLoading] = useState(true);

  async function fetchHabitat(id) {
    try {
      const res = await api.get(`/pokemon-species/${id}`);
      if (res.data.habitat === null)
        return 'unknow';
      else
        return res.data.habitat.name;
    } catch (err) {
      alert('falha na requisição - pokemon-sppecies - habitat');
    }
  }

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    //definindo id dos pokemon que serão carregados baseados na página atual e limite de items
    const idInit = (page - 1) * peerPage;
    const finalId = (page < totalPages) ? idInit + peerPage : totalPokemons;

    const pokemons = [];
    try {
      for (let i = idInit + 1; i <= finalId; i++) {
        const habitat = await fetchHabitat(i);
        await api.get(`/pokemon/${i}`).then(res => {
          const { id, name, abilities, sprites, types } = res.data;
          pokemons.push({
            id,
            name,
            types,
            abilities,
            habitat,
            img: sprites.other.dream_world.front_default
          })
        });
      }
      setPokeonList(pokemons);
      setLoading(false);
    } catch (error) {
      alert('falha na listagem dos items');
    }
  }, [page, totalPages, totalPokemons]);


  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <S.Container>
      <S.Menu>
        <AsideMenu active={2} />
      </S.Menu>
      <S.Content>
        {
          loading && <LoadingSpinnerScreen />
        }
        <S.Cards>
          {pokemonsList.map(pokemon => <CardGalery key={pokemon.id} pokemon={pokemon} setLoading={setLoading} />)}
        </S.Cards>
        <S.Pagination>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} loading={loading} />
        </S.Pagination>
      </S.Content>
    </S.Container>
  )
}

export default Galery;
