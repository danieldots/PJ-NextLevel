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
    border-right: 1px solid black;
  }
`