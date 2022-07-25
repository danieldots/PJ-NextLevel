import * as S from '../../styles/Routine/Routine.style';
import * as SS from '../../styles/Routine/CardSection.style';

function ExerciseCard({ id, type, part, name, numbers, sets, duration, totalDuration, calories, totalCalories, addExercise, openCard }) {
  const clickAddExercise = () => {
    addExercise({
      id,
      type,
      part,
      name,
      numbers,
      sets,
      duration,
      totalDuration,
      calories,
      totalCalories,
    })
  }
  return (
    <S.ExerciseCard openCard={openCard}>
      <SS.CardText>{type}/{part}</SS.CardText>
      <SS.CardMainText>{name}</SS.CardMainText>
      <button onClick={() => clickAddExercise()}> 추가 </button>
    </S.ExerciseCard> 
  )
}

export default ExerciseCard;