import React, { useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import pokebola from '../../assets/icons/pokebola-color.png';
import returnIconType from '../../utils/typesIcons';
import returnIconHabitat from '../../utils/habitatsIcons';

const CardGalery = ({ pokemon, setLoading }) => {

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    < S.Container >
      <S.Content>
        <img id="pokemon" src={pokemon.img} alt="pokemon" />
        <Tippy
          interactive={true}
          placement={'bottom'}
          theme={'primary'}
          content={
            <div id="tips">
              <div id="title-btn">
                <Link to={`pokemon/${pokemon.id}`}>
                  <button>{pokemon.name}</button>
                </Link>
              </div>
              <div id="content-tips">

                <div id="type">
                  <h3>Tipo</h3>
                  <div className="img">
                    {
                      pokemon.types.map(item => {
                        return <Tippy
                          interactive={true}
                          placement={'bottom'}
                          theme={'second'}
                          content={<span>{item.type.name}</span>}>
                          <img key={item.id} src={returnIconType(item.type.name)} alt={item.type.name} />
                        </Tippy>
                      })
                    }
                  </div>
                </div>

                <div id="habitat">
                  <h3>Habitat</h3>
                  <div className="img">
                    <Tippy
                      interactive={true}
                      placement={'bottom'}
                      theme={'second'}
                      content={<span>{pokemon.habitat}</span>}>
                      <img src={returnIconHabitat(pokemon.habitat)} alt={pokemon.habitat} />
                    </Tippy>
                  </div>
                </div>

              </div>
            </div>
          }>
          <img id="pokebola" src={pokebola} alt="nome" />
        </Tippy>
      </S.Content>
    </S.Container >
  )
}

export default CardGalery;
