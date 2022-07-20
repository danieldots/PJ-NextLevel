import Header from '../components/Header';
import Advice from '../components/MyPage/Advice';
import Profile from '../components/MyPage/Profile';
import * as S from '../styles/MyPage/MyPage.style';

function MyPage() {
  return (
    <S.Container>
      <Header route="MyPage"/>
      <Profile />
      <Advice />
    </S.Container>
  )
}

export default MyPage;