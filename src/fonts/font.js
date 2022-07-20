import { createGlobalStyle } from "styled-components";
import OpenSansMedium from 'src/fonts/OpenSans-Medium.woff'

export default createGlobalStyle`
  @font-face {
    font-family: "OpenSansMedium";
    src: url(${OpenSansMedium}) format('woff');
  }`