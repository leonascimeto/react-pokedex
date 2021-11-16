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

`

export const Content = styled.div`
  min-height: 100vh;
  padding: 0 2rem;
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 4rem;
    gap: 1rem;

    .btn-cards{
      background: none;
      border: none;
    }

    .active{
      background-image:var(--active);
    }

    @media(max-width: 1024px){
    justify-content: center;
    }

`

export const Main = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    padding-top: 4rem;
    gap: 3rem;
    @media(max-width: 1024px){
      grid-template-columns: 1fr;
    }

`
export const Table = styled.div`
`

export const Graph = styled.div`
  padding-bottom: 2rem;
`