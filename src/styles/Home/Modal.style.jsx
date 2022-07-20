import styled from "styled-components";

export const ModalWindow = styled.div`
  display: ${ props => props.open ? "block" : "none"};
  width: 400px;
  height: 400px;
  background-color: white;
`

export const ModalText = styled.div`
  color: black;
  text-decoration: none;
`