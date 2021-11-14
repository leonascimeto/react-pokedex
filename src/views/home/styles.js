import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
  padding-left: 23rem;
  width: 100%;
  min-height: 100vh;
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 4rem;

    .btn-cards{
      background: none;
      border: none;
    }

    .active{
      background-image:var(--active);
    }

`

export const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 2rem;
`
export const Table = styled.div`
    margin-top: 4rem;
    width: 50%;
`

export const Graph = styled.div`
  margin-top: 4rem;
  width: 40%;
`