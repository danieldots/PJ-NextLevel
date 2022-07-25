import { useRef, useState } from 'react';
import * as S from '../../styles/Routine/ConfirmSection.style'

function ConfirmSection({ confirmRoutine, getName }) {

  return ( 
    <S.ConfirmSection>
      <S.RoutineNameInput onChange={getName} placeholder='이름을 정해주세요!'/>
      <S.RoutineNameButton onClick={() => confirmRoutine()}>루틴 생성</S.RoutineNameButton>
    </S.ConfirmSection>
  )
}

export default ConfirmSection;