import styled from "styled-components";


export const Container = styled.div`
  height: 560px;
  background-image: var(--primary-color);
  display: grid;
  grid-template-rows: 3fr 7fr;
  border-radius: 10px;


  .header{
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      padding: .5rem 1rem;
      display: grid;


      #title{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #filters{
        display: flex;
        align-items: center;
        justify-content: space-between;

          .btn{
            cursor:pointer;
            background: none;
            border: none;
            background-color: #aaa;
            padding: .4rem .8rem;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            transition: .2s;
          }

          .btn:hover, .active{
              background-image: var(--active);
            }

          .first{
            border-radius: 10px 0 0 10px;
          }
          .last{
            border-radius: 0 10px 10px 0;
          }
          .hp{
              background-image: ${props => props.btnActive === 'hp' && `var(--active)`};
          }
          .atk{
              background-image: ${props => props.btnActive === 'atk' && `var(--active)`};
          }
          .def{
              background-image: ${props => props.btnActive === 'def' && `var(--active)`};
          }
          .vel{
              background-image: ${props => props.btnActive === 'vel' && `var(--active)`};
          }

        
          #icon{
            img{
              width: 2rem;
              height: 2rem;
            }
          }
      }

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