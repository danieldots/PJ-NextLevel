import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Routine/RoutineCard.style'

function RoutineCard({ routine }) {
  const navigate = useNavigate()

  let totalDuration = 0;
  for (let i = 0; i < routine.length; i++){
    if (routine[i].id) {
      totalDuration = totalDuration + (routine[i].numbers * routine[i].sets * routine[i].duration) + (routine[i].sets * 20)
    }
  } 
  const minute = Math.floor(totalDuration/60)
  const second = Math.floor(totalDuration%60)

  let totalCalories = 0;
  for (let i = 0; i < routine.length; i++){
    if (routine[i].id) {
      totalCalories = totalCalories + (routine[i].numbers * routine[i].sets * routine[i].calories)
    }
  }
  
  const name = routine[routine.length - 1].name;

  const [routineName, setRoutineName] = useState('')
  useEffect(() => {
    setRoutineName(name)
  }, [])
  const startExercise = () => {
    navigate(`/exercise`, { state: { routine } })
  }

  return (
    <S.RoutineCard>
      <S.RoutineCardText>
        루틴: {routineName} 
      </S.RoutineCardText>
      <S.RoutineCardText>
        소요시간: <br/>{minute}분 {second}초
      </S.RoutineCardText>
      <S.RoutineCardText>
        소모 칼로리: {totalCalories}kcal
      </S.RoutineCardText>
      <S.RoutineCardText onClick={startExercise}>
        운동 시작 !!!
      </S.RoutineCardText>    
    </S.RoutineCard>
  )
}

export default RoutineCard;

