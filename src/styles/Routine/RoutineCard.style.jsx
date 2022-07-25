import styled from "styled-components";
import '../../App.css';

export const RoutineCard = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 90%;
  background-color: white;
  color: black;
  font-family: "OpenSansMedium";
  font-size: 16px;
  border-radius: 10px;
`
export const RoutineCardText = styled.div`
  margin-left: 130px;
  width: 80px;
  &:last-child{
    width: 120px;
    height: 50px;
    text-align: center;
    background-color: black;
    border-radius: 10px;
    color: white;
    line-height: 50px;
    text-decoration: none;
  }
  &:hover{
    cursor: pointer
  }
`