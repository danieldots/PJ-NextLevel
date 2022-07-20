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
`
export const RoutineBox = styled.div`
  display: grid;
  grid-template-columns: ${props => props.openCard ? "75% 25%" : "1fr"};
  justify-items: center;
  width: 100%;
  height: 100%;
`

export const addRoutineCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 90%;
  height: 100px;
  background-color: white;
  color: black;
  transform-origin: top left;
  transition-duration: 0.5s;
  transform: ${props => props.openCard ? "scaleY(8) " : "none"};
`

export const addIcon = styled.img`
  width: 60px;
  height: 60px;
  opacity: 0.4;
  &:hover{
    cursor: pointer;
  }
`