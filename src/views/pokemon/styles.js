import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
  padding-left: 23rem;
  width: 100%;
  min-height: 100vh;
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
    margin-top: 10rem;
    width: 560px;
    
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

    
    #pokemon-image{
      height: 200px;
      display: flex;
      justify-content: center;
      position: relative;

      img{
        height: 320px;
        position: absolute;
        bottom: 5px;
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
  grid-template-columns: 1fr 1.5fr 1fr;
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

export const Stats = styled.div`
  display: grid;
  padding: .4rem;
  grid-template-rows: repeat(4, 2.2rem);
  border-right: 1px solid rgba(255,255,255, 0.3);
  border-left: 1px solid rgba(255,255,255, 0.3);
  
  .stats-item{
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
  }

  .stats-title{
    font-size: 1rem;
    font-weight: bold;
    justify-self: right;
    letter-spacing: .1rem;
  }

  .stats-bar{
    .scope-bar{
      grid-column: 1;
      min-width: 120px;
      background-color: #f2f2f2;
      border-radius: 10px;
    }

    .bar{
      height: 1.5rem;
      background-color: green;
      border-radius: 10px 0px 0px 10px;
    }

    #hp-bar{
      width: ${(props => (props.hp / 2.75))}%;
    }
    
    #atk-bar{
      width: ${props => props.atk / 2.75}%;
    }

    #def-bar{
      width: ${props => props.def / 2.75}%;
    }

    #vel-bar{
      width: ${props => props.vel / 2.75}%;
    }

  }
  
  .stats-number{
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--third-color)
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
