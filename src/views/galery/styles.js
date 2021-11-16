import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 360px auto;

  @media(max-width: 1024px){
    grid-template-columns: 120px auto;
  }

  @media(max-width: 560px){
    grid-template-columns: 1fr;
  }
`

export const Menu = styled.div`

`;

export const Content = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 6rem;

`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 2rem;
`

export const Pagination = styled.div`
  padding: 1rem 0;
`