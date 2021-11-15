import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 10vh);
  background-image: var(--primary-color);
  position: fixed;
  width: 360px;
  z-index: 3000;

  @media(max-width: 1024px){
    width: 160px;
  }

  @media(max-width: 560px){
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
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
`

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
    display: flex;
    justify-content: center;
    button{
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
`