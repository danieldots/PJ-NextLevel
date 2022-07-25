import { useState } from 'react';
import * as S from '../styles/Header.style'

function Header({ route }) {

  return(
    <S.Header>
      <S.Logo width="40" height="40" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.08807 3.27273V12H6.2983L2.82528 6.96307H2.76989V12H0.660511V3.27273H2.47585L5.91051 8.30114H5.98295V3.27273H8.08807Z" fill="white"/>
        <path d="M7.66051 12V3.27273H9.76989V10.2869H13.4006V12H7.66051Z" fill="white"/>
      </S.Logo>
      <S.Link >
        <S.Menu as="a" href="/mypage" route={route}>MyPage</S.Menu>
        <S.Menu as="a" href="/routine" route={route}>Routine</S.Menu>
        <S.Menu as="a" href="/logs" route={route}>Logs</S.Menu>
        <S.Menu>Image</S.Menu>
      </S.Link>
      </S.Header>
  );
};

export default Header;