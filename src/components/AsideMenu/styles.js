import styled from "styled-components";

export const Container = styled.div`
  width: 23rem;
  display: grid;
  grid-template-rows: repeat(10, 10vh);
  position: fixed;
`;

export const Logo = styled.div`
  grid-row: 1/4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);

`

export const Options = styled.div`
  grid-row: 4/11;
  .actived{
    background-color: #201030;
  }

  button{
    display: flex;
    width: 100%;
    height: 17.5vh;
    justify-content: center;
    align-items: center;
    background:none;
    background-color: var(--primary-color);
    border: none;
    cursor: pointer;

    &:hover{
      background-color: #201030;
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