import styled from "styled-components";
import '../../App.css';

export const ConfirmSection = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  width: 100%; 
  height: 150px;
  font-family: "OpenSansMedium";
  font-size: 35px;
  color: black;   
  padding-top: 20px;
`

export const RoutineNameInput = styled.input` 
  width: 200px;
  background-color: white;
  font-family: "OpenSansMedium";
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  border: 0;
  border-bottom: 1px solid black;
`

export const RoutineNameButton = styled.button`
  width: 120px;
  background-color: black;
  font-family: "OpenSansMedium";
  font-size: 25px;
  text-align: center; 
  color: white;
  border-radius: 10px;
  text-decoration:l none;
  &:hover{
    cursor: pointer;
  }
`