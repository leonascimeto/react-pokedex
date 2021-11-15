import styled from "styled-components";

export const Container = styled.div`
    height: 560px;
    background-image: var(--primary-color);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 2fr 1fr 7fr;

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
      grid-template-columns: 1fr 1fr;
      font-weight: bold;
      color: #fff;
      font-size: 1.4rem;
      letter-spacing: 2px;
      padding: 0 8px;

      span{
        margin-left: 2rem;
      }

      @media(max-width: 560px){
        font-size: 1rem;
        text-align: center;

        span{
          justify-self: flex-start;
        }
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
        grid-template-columns: 1fr 1fr;
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
        background-image: var(--active);    /* color of the scroll thumb */
        border-radius: 3rem;       /* roundness of the scroll thumb */
        border: 3px solid var(--primary-color);  /* creates padding around scroll thumb */
      }
    }

`;