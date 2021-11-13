import styled from "styled-components";


export const Container = styled.div`
  width: 500px;
  height: 560px;
  background-color: var(--primary-color);
  display: grid;
  grid-template-rows: 3fr 7fr;
  border-radius: 10px;
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

`;