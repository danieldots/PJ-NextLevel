import styled from "styled-components";
import '../../App.css';

export const CardText = styled.div`
  width: 100%;
  height: 18px;
  font-family: "OpenSansMedium";
  font-size: 16px;
  color: gray;
`

export const CardMainText = styled.div`
  width: 100%;
  height: 100%;
  font-family: "OpenSansMedium";
  font-size: 22px;
  color: black;
`

export const AddedExercise = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  border: 1px solid black;
  font-family: "OpenSansMedium";
  font-size: 22px;
  color: black;
  border-radius: 10px;
`

export const CardSection = styled.div`
  display: grid; 
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  width: 100%;
  height: ${props => props.openCard ? "100%" : "0px"};
  justify-items: center;
  align-items: center;
  padding-bottom: ${props => props.openCard ? "40px" : "0px"};
`

export const AddNumbersButton = styled.button`
  width: 20px;
  background-color: black;
  font-family: "OpenSansMedium";
  font-size: 15px;
  text-align: center; 
  color: white;
  border-radius: 3px;
  text-decoration:l none;
  &:hover{
    cursor: pointer;
  }
`