import React from 'react';
import * as S from './styles';

//icons
import pokemon from '../../assets/icons/pokemon.png';
import habilidades from '../../assets/icons/bolt.png';
import categorias from '../../assets/icons/category.png';
import localizacoes from '../../assets/icons/location-full.png';


const CardInfo = ({ title, value, active }) => {

  const identyfyCard = () => {
    switch (title) {
      case 'Especies':
        return pokemon;
      case 'Habilidades':
        return habilidades;
      case 'Tipos':
        return categorias;
      case 'Localizações':
        return localizacoes;
      default:
        break;
    }
  }


  return (
    <S.Container active={active}>
      <S.Header>
        <h1>{title}</h1>
      </S.Header>
      <S.Content>
        <span>{value}</span>
        <img src={identyfyCard()} alt="icon card" />
      </S.Content>
    </S.Container>
  )
}

export default CardInfo;
