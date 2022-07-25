import * as S from '../../styles/Routine/RoutineCard.style'

function RoutineCard({ routine }) {
  let totalDuration = 0;
  for (let i = 0; i < routine.length; i++){
    totalDuration = totalDuration + (routine[i].numbers * routine[i].sets * routine[i].duration) + (routine[i].sets * 45)
  }
  const minute = Math.floor(totalDuration/60)
  const second = Math.floor(totalDuration%60)

  let totalCalories = 0;
  for (let i = 0; i < routine.length; i++){
    totalCalories = totalCalories + (routine[i].numbers * routine[i].sets * routine[i].calories)
  }
  return (
      <S.RoutineCard>
        루틴: <br/>
        소요시간: {minute}분 {second}초 <br/>
        소모 칼로리: {totalCalories}kcal
      </S.RoutineCard>
  )
}

export default RoutineCard;

