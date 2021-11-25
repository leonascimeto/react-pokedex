import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import lupa from '../../assets/icons/search.png';
import api from '../../services/api';
import limitPokemons from '../../utils/global-info';

const Search = ({ setIdPokemon }) => {
  const totalPokemons = limitPokemons;
  const [inputText, setInputText] = useState('');
  const [nameList, setNameList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchNames = useCallback(async () => {
    try {
      const response = await api.get(`/pokemon?limit=${totalPokemons}`);
      setNameList(response.data.results);
    } catch (error) {
      alert('Error: falha na conexão com a API - Listagem de nomes')
    }
  }, [totalPokemons]);

  async function fetchId(name) {
    try {
      const response = await api.get(`/pokemon/${name}`)
      const id = response.data.id;
      setIdPokemon(id);
    } catch (err) {
      alert("Erro ao buscar dados na API")
    }
  }

  function onChangeHandler(text) {
    let matches = [];
    if (text.length > 0) {
      matches = nameList.filter(pok => {
        const regex = new RegExp(`${text}`, "gi")
        return pok.name.match(regex)
      })
    }
    setSuggestions(matches);
    setInputText(text);
  }

  function onSuggestionHandler(text) {
    setInputText(text);
    setSuggestions([]);
    fetchId(text);
  }

  useEffect(() => {
    fetchNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <S.Container img={lupa}>

      <input type="text" placeholder="Digite o nome do pokemon ..." onChange={(e) => onChangeHandler(e.target.value)} value={inputText} onBlur={() => {
        setTimeout(() => {
          setSuggestions([])
        }, 100);
      }} />

      <S.AutoComplete>
        {suggestions && suggestions.map((sugest, i) => {
          const delay = `${i + 1}00ms`
          return <li style={{ '--delay': delay }} className="suggestion" key={i} onClick={() => onSuggestionHandler(sugest.name)} >{sugest.name}</li>
        })}
      </S.AutoComplete>
    </S.Container>
  )
}

export default Search;
