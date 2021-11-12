import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
  padding-left: 23rem;
  width: 100%;
  min-height: 100vh;
`
export const SearchArea = styled.div`
`

export const CardArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .arrow{
    height: 100%;
    align-self: center;
    position: relative;
    top: 100px;
    margin: 0 1rem;

    img{
      width: 40px;
      height: 40px;
      min-width: 20px;
      min-height: 20px;
    }

    button{
      background: none;
      border: none;
      cursor: pointer;
      transition: .2s;

      &:hover{
        transform: scale(1.2);
      }
    }
  }
`

export const Card = styled.div`
    width: 620px;
    margin-top: 8rem;
    
.steel {
	background-color: #f4f4f4;
}

.fire {
	background-color: #FDDFDF;
}

.grass {
	background-color: #DEFDE0;
}

.electric {
	background-color: #FCF7DE;
}

.water,
.ice {
	background-color: #DEF3FD;
}

.ground {
	background-color: #f4e7da;
}

.rock {
	background-color: #d5d5d4;
}

.fairy {
	background-color: #fceaff;
}

.poison {
	background-color: #98d7a5;
}

.bug {
	background-color: #f8d5a3;
}

.dragon {
	background-color: #97b3e6;
}

.psychic {
	background-color: #eaeda1;
}

.flying {
	background-color: #F5F5F5;
}

.fighting {
	background-color: #E6E0D4;
}

.ghost {
	background-color: #ae92b9;
}

.dark {
	background-color: #F5F5F5;
}

.normal {
	background-color: #D6DDC9;
}
`
// ###################################  top card styles  ############################################

export const TopCard = styled.div`
    padding:.4rem;
    display: flex;
    flex-direction: column;
    border-radius: .725rem .725rem 0 0;

    #graph-image{
      display: flex;
    }
    
    #pokemon-image{
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      img{
        height: 250px;
      }
    }

    
    #pokemon-status{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
    }

    #graph-content{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 280px;
    }

    #graph-option{
      margin: 1rem 0;
        
      .radar{
        border-radius: 16px 0px 0px 16px;
      }

      .bar{
        border-radius: 0px 16px 16px 0px;
      }

      .btn{
        border: none;
        background: none;
        background-color: #aaa;
        cursor: pointer;
        color: #fff;
        font-size: .6rem;
        padding: .4rem .6rem;
        font-weight: bold;
        text-transform: uppercase;

        &:hover, &.actived{
          background-color: var(--primary-color);
        }
      }
    }

    #pokemon-name{
      color: var(--primary-color);
      font-weight: bold;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      
    }

`

// ###################################  bottom card styles  ############################################

export const BottomCard = styled.div`
  background-color: var(--active);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 0px 0px .725rem .725rem;

  .center{
    align-self: center;
    justify-self: center;
    }

  .right{
    align-self: center;
    justify-self: right;
  }
  
  .left{
    align-self: center;
    justify-self: left;
  }

`

export const Types = styled.div`
  padding: .4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .type{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 .6rem;


    .img-type{
      width: 2.6rem;
    }
    .name-type{
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: .1rem;
    }
  }

`

export const Abilities = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  padding: .4rem;
  border-right: 1px solid rgba(255,255,255, 0.3);
  border-left: 1px solid rgba(255,255,255, 0.3);

  #title-abilities{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: .9rem;
    letter-spacing: .1rem;
    color: var(--third-color);
  }

  #names-abilities{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: .1rem;
      gap: .8rem 0;
  }
`

export const BodyInfo = styled.div`
  display: grid;
  grid-template-rows: 4.4rem 4.4rem;
  padding: 0 .4rem;

  .info{
    font-size: 1.5rem;


    sub{
    font-size: .8rem;
    font-weight: 400;
    }
  }
  
`
