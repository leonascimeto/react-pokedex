import React from 'react'
import * as S from './styles'

//icons
import pokemon from '../../assets/icons/pokemon.png'
import habilidades from '../../assets/icons/bolt.png'
import categorias from '../../assets/icons/category.png'
import localizacoes from '../../assets/icons/location-full.png'


const CardInfo = ({ title, value }) => {

  const selectImage = () => {
    switch (title) {
      case 'Pokemons':
        return pokemon;
      case 'Habilidades':
        return habilidades;
      case 'Categorias':
        return categorias;
      case 'Localizações':
        return localizacoes;
      default:
        alert("falha na seleção de imagens")
    }
  }

  return (
    <S.Container>
      <S.Header>
        {console.log(selectImage)}
        <h1>{title}</h1>
      </S.Header>
      <S.Content>
        <span>{value}</span>
        <img src={selectImage()} alt="icon card" />
      </S.Content>
    </S.Container>
  )
}

export default CardInfo
