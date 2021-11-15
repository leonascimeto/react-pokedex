import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 360px auto;

  @media(max-width: 1024px){
    grid-template-columns: 160px auto;
  }

  @media(max-width: 560px){
    grid-template-columns: 1fr;
  }
`

export const Menu = styled.div`

`

export const Content = styled.div`
  width: 100%;
  padding-top: 1rem;
`
export const Developer = styled.div`
  padding: 2rem 0;
  position: relative;
  display: flex;
  justify-content: center;

  #myLogo{
    width: 50%;
    @media(max-width: 560px){
      width: 80%;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  color: #fff;

  @media(max-width: 560px){
    font-size: .8rem;

    .curriculo a{
      font-size: 10px;
    }
  }

  .title{
      text-transform: uppercase;
    }

  #stacks-container{
    text-align: center;
    padding: 0 2rem;

    #stacks{
      display: flex;
      justify-content: center;
      gap: 2rem;

      @media (max-width: 560px){
        .stack-item{
          img{
            width: 3rem;
          }
        }
      }

      .stack-item .description{
        margin-top: .6rem;
      }
    }
  }

  #contacts-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 2rem;


      #network{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        .item{
          transition: .2s;
          &:hover{
            transform: scale(1.1);
          }

          & img{
            width: 83px;
            
            @media(max-width: 560px){
              width: 4rem;
            }
          }
        }

        .curriculo a{
          font-size: 30px;
          background-image: var(--primary-color);
          color: #fff;
          font-weight: bold;
          padding: 1rem;
          border-radius: 1rem;
          cursor: pointer;
          border: none;

          @media(max-width: 560px){
            font-size: 1rem;
          }
          
        }
      }
    }
`

export const Quote = styled.div`
    display: flex;
    justify-content: center;

  #quote-container{
    color: #fff;
    max-width: 75%;

    @media(max-width: 560px){
      max-width: 95%;
    }

    blockquote{
      font-style: italic;
      text-align: center;
      padding: .5rem;
      p{
        font-size: 2rem;
        @media(max-width: 560px){
        font-size: 1.2rem;
        }
      }
      
    }
  }
`