import styled from "styled-components";
import '../../App.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`

export const HomeTitle = styled.div`
  color: white;
  font-family: "OpenSansMedium";
  font-size: 40px;
`

export const RegisterWindow = styled.div`
  width: 40%;
  height: 30%;
  color: white;
  font-family: "OpenSansMedium";
  font-size: 40px;
  div {
    font-size: 20px;
  }
  .modalWindow {
    background-color: white;
  }
`

export const RegisterInput = styled.input`
  width: 70%;
  color: white;
  font-family: "OpenSansMedium";
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid white;
`

export const RegisterButton = styled.button`
  color: white;
  font-family: "OpenSansMedium";
  background-color: transparent;
  text-decoration: none;
`

