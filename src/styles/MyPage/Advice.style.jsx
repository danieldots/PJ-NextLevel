import styled from "styled-components";
import '../../App.css';

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 10px;
  color: black;
  font-family: "openSansMedium";

  div{
    width: 100%;
    height: 100%;
  }
`

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  span{
    font-size: 40px;
    font-weight: border;
    color: #4793de;
  }
`