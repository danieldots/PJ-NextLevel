import styled from "styled-components";
import '../../App.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: black;
`
export const Diary = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  width: 100%;
  height: 100%;
  `

export const DiaryCard = styled.div`
  display: flex;
  width: 200px;
  height: 330px;
  border: 1px solid white;
  border-radius: 10px;
  font-family: "OpenSansMedium";
  color: white;
  span {
    display: block;
    padding-top: 135px;
  }
`