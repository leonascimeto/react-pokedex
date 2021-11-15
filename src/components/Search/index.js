import React, { useState, useEffect } from 'react';
import * as S from './styles';
import lupa from '../../assets/icons/search.png';
import api from '../../services/api';
import limitPokemons from '../../utils/global-info';

const Search = ({ setIdPokemon }) => {
  const totalPokemons = limitPokemons;
  const [inputText, setInputText] = useState('');
  const [nameList, setNameList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  async function fetchNames() {
    const response = await api.get(`/pokemon?limit=${totalPokemons}`);
    setNameList(response.data.results);
  }

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

    console.log('matches: ', matches)
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

    console.log(nameList)
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
          return <div className="suggestion" key={i} onClick={() => onSuggestionHandler(sugest.name)} >{sugest.name}</div>
        })}
      </S.AutoComplete>
    </S.Container>
  )
}

export default Search;
