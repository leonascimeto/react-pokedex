import styled from "styled-components"

export const Container = styled.div`
  width: 60%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;

    input{
      width: 100%;
      min-width: 340px;
      background-image: url(${props => props.img});
      background-repeat: no-repeat;
      background-size: 1.8rem;
      background-position: 98% center;
      background-color: rgba(255,255,255,0);
      padding: 1.2rem 1rem;
      font-size: 2rem;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid rgba(255,255,255, .8);
      border-radius: 8px 8px 0 0;
      color: #fff;
      outline: none;
      transition: background-color .5s ease-in;
    }
    input:focus{
      background-color: rgba(255,255,255, .1);
    }
    
    @media(max-width: 1024px){
      input::-webkit-input-placeholder{
        font-size: 1rem;
      }
    }
`

export const AutoComplete = styled.ul`
  width: 100%;
  min-width: 340px;
  z-index: 1000;
  border-radius: 0 0 8px 8px;
  opacity: .97;
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: 6.6rem;
  list-style: none;
  max-height: 28rem;
  overflow-y: scroll;
  background-color: #1e1e1e;
  overflow-x: hidden;



  li:hover{
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.05);
  }

  li{
    line-height: 3rem;
    cursor: pointer;
    position: relative;
    left: 100%;
    animation: rightToLeft 0.5s ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: var(--delay);
  }

  @keyframes rightToLeft {
    0%{
      left: 100%;
    }
    50%{
      left: 100%;
    }
    100%{
      left: 0;
    }
  }
  
    
       &::-webkit-scrollbar {
        width: 1.3rem;               
      }

      &::-webkit-scrollbar-track {
        background-color: #000;
        backdrop-filter: blur(10px);
        --webkit-backdrop-filter: blur(10px);     
        border-radius: 0 .725rem .725rem 0;

      }

      &::-webkit-scrollbar-thumb {
        background-image: var(--primary-color); 
        border-radius: 3rem;    
      } 
`