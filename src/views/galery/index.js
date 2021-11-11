import React, { useState, useEffect } from 'react'
import * as S from './styles'
import api from '../../services/api';

//componenentes
import AsideMenu from '../../components/AsideMenu';
import CardGalery from '../../components/CardGalery';
import Pagination from '../../components/Pagination';


const Galery = () => {
  const [page, setPage] = useState(1);
  const [pokemonsList, setPokeonList] = useState([]);
  const peerPage = 20;
  const totalPokemons = 646;
  const totalPages = Math.ceil(totalPokemons / peerPage);

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

  async function fetchPokemons() {
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
    } catch (error) {
      alert('falha na listagem dos items');
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <S.Container>
      <AsideMenu active={2} />
      <S.Content>
        <S.Cards>
          {pokemonsList.map(pokemon => <CardGalery key={pokemon.id} pokemon={pokemon} />)}
        </S.Cards>
      </S.Content>
      {/* <S.Pagination> */}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      {/* </S.Pagination> */}
    </S.Container>
  )
}

export default Galery
