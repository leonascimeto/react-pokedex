import React, { useState } from 'react'
import * as S from './styles'
import logo from '../../assets/imgs/logo.svg';

//Ícones
import info from '../../assets/icons/info.svg';
import pokeballs from '../../assets/icons/pokeballs.svg';
import pokeball from '../../assets/icons/pokeball.svg';
import aboutUs from '../../assets/icons/test.svg';
import { Link } from 'react-router-dom';

const AsideMenu = ({ active }) => {
  const [actived, setActived] = useState(active);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.Container>
      <S.Burger>
        <div className={menuOpen ? `open menu` : `menu`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bars">

          </div>
        </div>
      </S.Burger>
      <S.Logo>
        <div><img src={logo} alt="logo" /></div>
      </S.Logo>
      <S.Options menuOpen={menuOpen}>
        <Link to="/">
          <button onClick={() => setActived(1)} className={actived === 1 && 'actived'}>
            <img src={info} alt="" />
            <span>Informações</span>
          </button>
        </Link>
        <Link to="/galery">
          <button onClick={() => setActived(2)} className={actived === 2 && 'actived'}>
            <img src={pokeballs} alt="" />
            <span>Galeria</span>
          </button>
        </Link>
        <Link to="/pokemon">
          <button onClick={() => setActived(3)} className={actived === 3 && 'actived'}>
            <img src={pokeball} alt="" />
            <span>Pokemon</span>
          </button>
        </Link>
        <Link to="/aboutus">
          <button onClick={() => setActived(4)} className={actived === 4 && 'actived'}>
            <img src={aboutUs} alt="sobre" />
            <span>Sobre Nós</span>
          </button>
        </Link>
      </S.Options>
    </S.Container>
  )
}

export default AsideMenu
