import React, { useState, useEffect } from 'react'
import api from '../../../services/api';
import * as S from './styles';

import specieIcon from '../../../assets/icons/pokemon.png';
import habilidadesIcon from '../../../assets/icons/bolt.png';
import tiposIcon from '../../../assets/icons/category.png';
import localizacoesIcon from '../../../assets/icons/location-full.png';

const TableMain = ({ selectCard, cardValues, setLoading }) => {
  const [dataTable, setDataTable] = useState([]);

  function identyfyCard() {
    switch (selectCard) {
      case 'especies':
        return {
          img: specieIcon,
          titleTable: 'Especies',
          titleLeft: 'Nome',
          titleRight: 'Anatomia'
        };
      case 'habilidades':
        return {
          img: habilidadesIcon,
          titleTable: 'Habilidades',
          titleLeft: 'Nome',
          titleRight: 'Quantidade de pokemons'
        };
      case 'tipos':
        return {
          img: tiposIcon,
          titleTable: 'Tipos',
          titleLeft: 'Nome',
          titleRight: 'Quantidade de pokemons'
        };
      case 'localizacoes':
        return {
          img: localizacoesIcon,
          titleTable: 'Localizações',
          titleLeft: 'Nome',
          titleRight: 'Região'
        };
      default:
        break;
    }
  }

  async function fetchSpecies() {
    setLoading(true);

    console.log('numero de items: ', cardValues[0]);

    const arrayPromises = await api.get(`/pokemon-species/?limit=${cardValues[0]}`).then(res => res.data.results);

    const arraySpecies = [];

    Promise.all(arrayPromises.map(async item => {
      const response = await api.get(item.url);

      const { id, name, shape } = response.data;

      const data = {
        id,
        tdLeft: name,
        tdRight: shape.name
      }
      arraySpecies.push(data);

    })).then(() => setDataTable(arraySpecies));

    setLoading(false);

  }

  async function fetchTypes() {
    setLoading(true);
    const arrayPromises = await api.get(`type?limit=${cardValues[1]}`).then(res => res.data.results)

    const arrayTypes = [];

    Promise.all(arrayPromises.map(async item => {
      const response = await api.get(item.url);

      const { id, name, pokemon } = response.data;

      const data = {
        id,
        tdLeft: name,
        tdRight: pokemon.length
      }

      arrayTypes.push(data);
    })).then(() => setDataTable(arrayTypes)).then(() => setLoading(false));
  }

  async function fetchAbilities() {
    setLoading(true);

    const arrayPromises = await api.get(`ability?limit=${cardValues[2]}`).then(res => res.data.results)

    const arrayAbilities = [];

    Promise.all(arrayPromises.map(async item => {
      const response = await api.get(item.url);

      const { id, name, pokemon } = response.data;

      const data = {
        id,
        tdLeft: name,
        tdRight: pokemon.length
      }

      arrayAbilities.push(data);
    })).then(() => setDataTable(arrayAbilities)).then(() => setLoading(false));
  }

  async function fetchLocations() {
    setLoading(true);

    const arrayPromises = await api.get(`location?limit=${cardValues[3]}`).then(res => res.data.results)

    const arrayLocations = [];

    console.log(arrayPromises);

    Promise.all(arrayPromises.map(async item => {
      const response = await api.get(item.url);

      const { id, name, region } = response.data;

      const data = {
        id,
        tdLeft: name,
        tdRight: (region !== null) ? region.name : 'unknow'
      }

      arrayLocations.push(data);
    })).then(() => setDataTable(arrayLocations)).then(() => setLoading(false));
  }


  useEffect(() => {
    switch (selectCard) {
      case 'especies':
        fetchSpecies();
        break;
      case 'habilidades':
        fetchAbilities();
        break;
      case 'tipos':
        fetchTypes();
        break;
      case 'localizacoes':
        fetchLocations();
        break;
      default:
        alert('seleção de dados inválido')
    }
  }, [selectCard, cardValues]);

  return (
    <S.Container>
      <div className="header">
        <span>{identyfyCard().titleTable}</span>
        <img src={identyfyCard().img} alt="Pokemon" />
      </div>
      <div className="titles">
        <span>{identyfyCard().titleLeft}</span>
        <span>{identyfyCard().titleRight}</span>
      </div>
      <div className="content">
        {
          dataTable && dataTable.map((item, i) =>
            <div className="row" key={i}>
              <span className="name">{item.tdLeft}</span>
              <span className="description">{item.tdRight}</span>
            </div>)
        }
      </div>
    </S.Container>
  )
}

export default TableMain;
