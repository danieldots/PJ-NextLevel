import { useState } from 'react';
import Header from '../components/Header';
import * as S from '../styles/Routine/Routine.style';

function Routine() {
  const [openCard, setOpenCard] = useState(false)
  const addRoutine = () => {
    setOpenCard(!openCard)
  }

  return (
    <S.Container>
      <Header route="Routine" />
      <S.RoutineBox openCard={openCard}>
        <S.AddRoutineCard openCard={openCard}>
          {openCard ? null : <S.AddIcon onClick={addRoutine} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Circled_plus.svg/800px-Circled_plus.svg.png" />}
        </S.AddRoutineCard>
        <S.ExerciseCard openCard={openCard}></S.ExerciseCard> 
      </S.RoutineBox>
    </S.Container>
  )
}

export default Routine;