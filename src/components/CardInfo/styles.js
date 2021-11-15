import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  padding: .5rem;
  background-image: ${props => (props.active === true) ? `var(--active)` : `var(--primary-color)`};
  width: 300px;
  height: 180px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;

  @media(max-width: 1024px){
    width: 150px;
    height: 100px;
  }

  @media(max-width: 560px){
    width: 120px;
    height: 80px;
  }

  &:hover{
    background-image: var(--active);
  }
`

export const Header = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 2rem;
    @media(max-width: 1024px){
      font-size: 1rem;
    }
  }
`

export const Content = styled.div`
  font-size: 2.5rem;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;

  img{
    width: 72px;
    height: 72px;
  }
  @media(max-width: 1024px){
      img{
        width: 2rem;
        height: 2rem;
      }
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      gap: .5rem;
  }
  @media(max-width: 560px){
    img{
      display: none;
    }
  }
`