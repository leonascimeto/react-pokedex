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
`

export const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 2rem;
`
export const Table = styled.div`
    width: 50%;
    height: 560px;
    background-color: var(--primary-color);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 2fr 1fr 7fr;
    margin-top: 4rem;
    border: 3px solid var(--primary-color);

    .header{
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
        width: 3rem;
        height: 3rem;
      }
    }

    .titles{
      display: grid;
      grid-template-columns: 4fr 6fr;
      font-weight: bold;
      color: #fff;
      font-size: 1.4rem;
      letter-spacing: 2px;

      span{
        margin-left: 2rem;
      }
    }

    .content{
      display: grid;
      grid-template-rows: repeat(8, 3rem);
      overflow-y: auto;
      grid-auto-rows: 3rem;
      background-color: #fff;
      border-radius: 0 0 10px 10px;

      .row{
        display: grid;
        grid-template-columns: 4fr 6fr;
        height: 3rem;

        border-top: 1px solid var(--primary-color);

        span{
          margin-left: 2.2rem;
          display: grid;
          align-self: center;
        }
      }

      &::-webkit-scrollbar {
        width: 1.3rem;               /* width of the entire scrollbar */
      }

      &::-webkit-scrollbar-track {
        background: var(--primary-color);        /* color of the tracking area */
        border-radius: 0 0 9px 0;

      }

      &::-webkit-scrollbar-thumb {
        background-color: #1F1134;    /* color of the scroll thumb */
        border-radius: 3rem;       /* roundness of the scroll thumb */
        border: 3px solid var(--primary-color);  /* creates padding around scroll thumb */
      }
    }

`

export const Graph = styled.div`
  width: 40%;
  height: 560px;
  background-color: var(--primary-color);
  display: grid;
  grid-template-rows: 3fr 7fr;
  border-radius: 10px;
  margin-top: 4rem;
  border: 3px solid var(--primary-color);


  .header{
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
        width: 3rem;
        height: 3rem;
      }
  }

  .content{
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .chartBar{
      width: 90%;
    }
  }

`