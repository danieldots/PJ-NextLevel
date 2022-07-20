import { useState } from 'react';
import * as S from '../styles/Header.style'

function Header({ route }) {

  return(
    <S.Header>
        <div>Header</div>
        <S.Link >
          <S.Menu as="a" href="/logs" route={route}>Logs</S.Menu>
          <S.Menu as="a" href="/routine" route={route}>Routine</S.Menu>
          <S.Menu as="a" href="/mypage" route={route}>MyPage</S.Menu>
          <S.Menu>Image</S.Menu>
        </S.Link>
      </S.Header>
  );
};

export default Header;