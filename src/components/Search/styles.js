import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
    input{
      width: 620px;
      min-width: 12rem;
      background-image: url(${props => props.img});
      background-repeat: no-repeat;
      background-size: 1.8rem;
      background-position: 98% center;
      background-color: rgba(0,0,0,.3);
      padding: 1.2rem 1rem;
      font-size: 1.5rem;
      border-radius: 2rem;
      color: #fff;
      outline: none;
    }
`

export const AutoComplete = styled.div`
  position: absolute;
  z-index: 1000;
  border-radius: .725rem;
  top: 8rem;
  opacity: .97;
  width: 24%;
  min-width: 620px;
  max-height: 18rem;
  overflow-y: auto;
  color: #fff;
  font-size: 1.5rem;
  background-color: rgba(136, 68, 238, 0.5);
  backdrop-filter: blur(20px);
  --webkit-backdrop-filter: blur(20px);

  .suggestion{
    padding: .5rem 1rem;
    border-bottom: 1px solid rgba(0,0,0, .1);
    cursor: pointer;
    transition: .2s;

    &:hover{
        background-color: var(--active);
      } 
  }
      

      &::-webkit-scrollbar {
        width: 1.3rem;               
      }

      &::-webkit-scrollbar-track {
        background-color: rgba(136, 68, 238, 0.8);
        backdrop-filter: blur(20px);
        --webkit-backdrop-filter: blur(20px);     
        border-radius: 0 .725rem .725rem 0;

      }

      &::-webkit-scrollbar-thumb {
        background-color: #1F1134; 
        border-radius: 3rem;    
        border: 3px solid var(--primary-color);  
      }
`