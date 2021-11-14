import styled from "styled-components";

export const Container = styled.div`
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
      background-image: var(--primary-color);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border:none;
      margin: 0 .5rem;
    }

    &.active{
      background-image: var(--active);
    }

    &.arrow{
      background: none;
      border:none;

      width: 2.2rem;
    }
  }
`