import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 1.3rem;
`

export const Content = styled.div`
  width:150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(0,0,0,.5);
  border: 8px solid #0052b6;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;


  // tippy.js
  .tippy-box{
    font-size: 1rem;
    padding: .5rem 1rem;
    text-transform: capitalize;
  }

  .tippy-box[data-theme~='primary'] {
    background-image: var(--primary-color);
    opacity: .98;
    color: #fff;
  }

  .tippy-box[data-theme~='primary'][data-placement^='bottom'] > .tippy-arrow::before {
    border-bottom-color: #005288;
  }

  .tippy-box[data-theme~='second'] {
    background-image: var(--active);
    color: #fff;
  }

  .tippy-box[data-theme~='second'][data-placement^='bottom'] > .tippy-arrow::before {
    border-bottom-color: #ff7f00;
  }
  
  .tippy-box[data-theme~='second'][data-placement^='top'] > .tippy-arrow::before {
    border-top-color: #ff7f00;
  }


  //personalizando tips
  #tips{
    display: flex;
    flex-direction: column;

    .img{
        display: flex;
        gap: 0 8px;

        img{
          width: 50px;
        }
      } 
    

    #content-tips{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #type{
      padding: 0 1rem;
      margin-right: 2rem;
      min-width: 75px;
    }

    #habitat{
      padding: 0 1rem;
      margin-left: 2rem;

    }

    #title-btn{
      display: flex;
      justify-content: center;

      button{
        padding: .5rem 1rem;
        background-image: var(--active);
        color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
        border: none;
        border-radius: .725rem;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.3rem;
        transition: .2s;

        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }

  #pokebola{
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      position: absolute;
      bottom: 4px;
      transition: .2s;
      z-index: 2;


      &:hover{
        transform: scale(1.3);
      }
    }

  #pokemon{
    position: relative;
    bottom: 40px;
    z-index:1;
  }

`