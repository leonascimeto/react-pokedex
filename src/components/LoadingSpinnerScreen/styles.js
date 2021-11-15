import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100vw - 360px);
  top: 0;
  left: 360px;
  background-color: rgba(0, 82, 182, .2);
  background-attachment: fixed;
  z-index: 2000;


  @media(max-width: 1024px){
    width: calc(100vw - 160px);
    left: 160px;
  }

  @media(max-width: 560px){
    width: 100vw;
    left: 0;
  }


`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 8px solid rgba(0,0,0,.3);
  border-left-color: #FFBE5C;
  animation: spin .8s linear infinite;


  @keyframes spin{
    to{
      transform: rotate(360deg);
    }
  }

`