import styled from "styled-components";
import '../../App.css';

export const CardText = styled.div`
  width: 100%;
  height: 18px;
  font-family: "OpenSansMedium";
  font-size: 13px;
  color: gray;
  margin-left: 10px;
`

export const CardMainText = styled.div`
  width: 100%;
  height: 100%;
  font-family: "OpenSansMedium";
  font-size: 16px;
  color: black;
  margin-top: 10px;
  margin-left: 10px;
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
  width: 15px;
  background-color: gray;
  font-family: "OpenSansMedium";
  font-size: 10px;
  text-align: center; 
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
  &:active{
    background-color: #80808080;
  }
`
export const AddExerciseButton = styled.button`
  background-color: white;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  font-family: "OpenSansMedium";
  border-radius: 0 0 10px 10px;
  font-size: 12px;
  &:hover{
    cursor: pointer;
  }
`