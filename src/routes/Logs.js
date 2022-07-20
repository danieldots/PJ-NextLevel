import Header from '../components/Header';
import * as S from '../styles/Logs/Logs.style';

function Logs() {
  return (
    <S.Container>
      <Header route="Logs"/>
      <S.Diary>
        <S.DiaryCard>
          <span>
            자신만의 운동 루틴을 만들어 완료하면, 카드를 만들 수 있어요!
          </span>
        </S.DiaryCard>
      </S.Diary>
    </S.Container>
  )
}

export default Logs;