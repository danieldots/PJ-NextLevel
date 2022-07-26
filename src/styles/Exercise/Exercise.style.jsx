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
  row-gap: 40px;
`

export const Exercise = styled.div`
  color: white;
  font-family: "OpenSansMedium";
  font-size: 40px;
  text-align: center;
`

export const ExerciseText = styled.div`
  font-family: "OpenSansMedium";
  color: #a4a4a4;
  text-align: center;
  font-size: 25px;
`

export const ExerciseCount = styled.div`
  color: yellowgreen;
  font-family: "OpenSansMedium";
  text-align: center;
  font-size: 40px;
`

export const TextSpan = styled.span`
  font-size: 40px;
  font-family: "OpenSansMedium";
  color: yellowgreen
`