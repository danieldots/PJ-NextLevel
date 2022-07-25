import styled from "styled-components";
import '../../App.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  overflow-y: scroll;
`
export const Box = styled.div`
  display: grid;
  grid-template-columns: ${props => props.openCard ? "73% 27%" : "1fr"};
  justify-items: center;
  width: 100%;
  height: 100%;
  margin-top: 70px;
`

export const RoutineList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  transform-origin: top left;
  transition-duration: 0.5s;
`

export const AddRoutineCard = styled.div`
  display: flex;
  flex-direction: column ;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: ${props => props.openCard ? "80px" : "0"};
  width: 90%;
  height: ${props => props.openCard ? "520px" : "17%"};
  background-color: white;
  color: black;
  transform-origin: top left;
  transition-duration: 0.5s;
  border-radius: 10px;
`

export const AddIcon = styled.img`
  width: 60px;
  height: 60px;
  opacity: 0.4;
  &:hover{
    cursor: pointer;
  }
`
export const CardBox = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr) ;
  width: 100%;
  height: 575px;
  transition-duration: 0.5s;
  transform-origin: left;
  transform: ${props => props.openCard ? "scaleX(1)" : "scaleX(0)"};
`

export const ExerciseCard = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  width: 87%;
  height: 40%;
  align-items: center;
  justify-self: flex-start;
  background-color: white;
  transition-duration: 0.5s;
  transform-origin: left;
  transform: ${props => props.openCard ? "scaleX(1)" : "scaleX(0)"};
  border-radius: 10px 10px 0 0;
  padding-top: 30px;
`
export const PageButton1 = styled.button`
  width: 90%;
  margin-left: 12px;
  background-color: gray;
  border-radius: 10px 0 0 10px;
  font-family: "OpenSansMedium";
  font-size: 16px;
  color: white;
  border: none;
  outline: none;
  &:hover{
    cursor: pointer
  }
`

export const PageButton2 = styled.button`
  width: 90%;
  margin-left: -12px;
  background-color: gray;
  border-radius: 0 10px 10px 0;
  font-family: "OpenSansMedium";
  color: white;
  font-size: 16px;
  border: none;
  outline: none;
  &:hover{
    cursor: pointer
  }
`



