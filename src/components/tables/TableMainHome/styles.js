import styled from "styled-components";

export const Container = styled.div`
    width: 700px;
    height: 560px;
    background-color: var(--primary-color);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 2fr 1fr 7fr;
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

`;