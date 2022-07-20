import styled from "styled-components";
import '../App.css';


export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  align-items: center;
  width: 100%;
  height: 70px;
  grid-template-columns: 70% 30%;
  background-color: black;
  font-family: "OpenSansMedium";
  color: white;

`

export const Link = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 12px;
  color: white;
  text-decoration: none;

`

export const Menu = styled.span`
  position: relative;
  font-family: "OpenSansLight";
  height: 30.5px;
  margin-left: 15px;
  color: white;
  text-decoration: none;

  &::before {
    position: absolute;
    margin-top: 31px;
    width: 100%;
    height: 2px;
    background: white;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s;
    content: '';
  }
  
  &:first-child {
    border-bottom: ${props => props.route === "Logs" ? "2px solid white" : "none"};
    &:hover{ 
      &::before {
        transform: ${props => props.route === "Logs" ? "scaleX(0)" : "scaleX(1)"};
      }
    }
  }
  &:nth-child(2) {
    border-bottom: ${props => props.route === "Routine" ? "2px solid white" : "none"};
    &:hover{ 
      &::before {
        transform: ${props => props.route === "Routine" ? "scaleX(0)" : "scaleX(1)"};
      }
    }
  }
  &:nth-child(3) {
    border-bottom: ${props => props.route === "MyPage" ? "2px solid white" : "none"};
    &:hover{ 
      &::before {
        transform: ${props => props.route === "MyPage" ? "scaleX(0)" : "scaleX(1)"};
      }
    }
  }
`



