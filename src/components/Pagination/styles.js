import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;

  
  button{
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    transition: .1s;

    &:hover{
      transform: scale(1.3);
    }

    &.number{
      background-color: var(--primary-color);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border:none;
      margin: 0 .5rem;
    }

    &.active{
      background: var(--third-color);
      color: var(--bg);
    }

    &.arrow{
      background: none;
      border:none;

      width: 2.2rem;
    }
  }
`