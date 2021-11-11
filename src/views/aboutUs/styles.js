import styled from 'styled-components';

export const Container = styled.div`
 
`

export const Content = styled.div`
  padding-left: 23rem;
  width: 100%;
  padding-top: 1rem;
  min-height: 100vh;
`
export const Developer = styled.div`
  padding: 2rem 0;
  position: relative;
  display: flex;
  justify-content: center;

  #myLogo{
    width: 48rem;
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  color: #fff;

  .title{
      text-transform: uppercase;
    }

  #stacks-container{
    text-align: center;
    padding: 0 6rem;

    #stacks{
      display: flex;
      justify-content: center;
      gap: 3rem;

      .stack-item .description{
        margin-top: .6rem;
      }
    }
  }

  #contacts-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 6rem;


      #network{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem 3rem;
        flex-wrap: wrap;

        .item{
          transition: .2s;
          &:hover{
            transform: scale(1.1);
          }

          & img{
            width: 83px;
          }
        }

        .curriculo a{
          font-size: 30px;
          background-color: var(--primary-color);
          color: #fff;
          font-weight: bold;
          padding: 1rem;
          border-radius: 1rem;
          cursor: pointer;
          border: none;
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

    blockquote{
      font-style: italic;
      text-align: center;
      padding: .5rem;
      p{
        font-size: 2rem;
      }
      footer{
        margin-top: -1rem;
        font-size: 1.5rem;
      }
    }
  }
`