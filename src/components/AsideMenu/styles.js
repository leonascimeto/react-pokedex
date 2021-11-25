import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 10vh);
  background-image: var(--primary-color);
  position: fixed;
  width: 360px;
  z-index: 3000;
  
  @media(max-width: 1024px){
    width: 120px;
  }

  @media(max-width: 560px){
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
`;

export const Logo = styled.div`
  grid-row: 1/4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 1024px){
    img{
      display: none;
    }
  }

  @media(max-width: 560px){
    display: none;
  }


`;

export const Burger = styled.div`
    position: fixed;
    top: 6px;
    right: 6px;

  .menu{
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .5s ease-in-out;
    display: none;
    border-radius: 10px;
    background-color: rgba(0,0,0,.4);

    
    
    .bars{
      width: 2rem;
      height: 4px;
      background-color: #fff;
      border-radius: 8px;
      position: relative;
      transition: all .5s ease-in-out;
    }

    .bars::before,
    .bars::after{
      position: absolute;
      content: '';
      width: 2rem;
      height: 4px;
      background-color: #fff;
      border-radius: 8px;
      transition: all .5s ease-in-out;
    }

    .bars::before{
      transform: translateY(-10px);
    }

    .bars::after{
      transform: translateY(10px);
    }

  }
      /* animations */    
    .open .bars{
      background: transparent;
    }

    .open .bars::before{
      transform: rotate(45deg);
    }

    .open .bars::after{
      transform: rotate(-45deg);
    }

    @media (max-width: 560px){
      .menu{
        display: flex;
      }
    }

`;

export const Options = styled.div`
  grid-row: 4/11;
  .actived{
    background-image: var(--active);
  }

  button{
    display: flex;
    width: 100%;
    height: 17.5vh;
    justify-content: center;
    align-items: center;
    background:none;
    border: none;
    cursor: pointer;

    &:hover{
      background-image: var(--active);
    }

  }

  span{
    color: #fff;
    font-size: 2rem;
    margin-left: .5rem;
  }

  img{
    width: 2rem;
    height: 2rem; 
  }

  @media(max-width: 1024px){
    span{
      display: none;
    }
  }

  @media(max-width: 560px){
    display: ${props => props.menuOpen ? `flex` : `none`};
    flex-direction: column;
    width: 100%;
    button{
      height: 4rem;
    }
    span{
      font-size: 1rem;
      display: flex;
    }
  }
`