import styled from "styled-components";

export const Container = styled.div`
  width: 23rem;
  display: grid;
  grid-template-rows: repeat(10, 10vh);
  position: fixed;
  background-image: var(--primary-color);
`;

export const Logo = styled.div`
  grid-row: 1/4;
  display: flex;
  justify-content: center;
  align-items: center;
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
`