import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  background-color: var(--primary-color);
  width: 300px;
  height: 180px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover{
    background-color: #201030;
  }
`

export const Header = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 2rem;
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
`