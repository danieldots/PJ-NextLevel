import * as S from '../../styles/Routine/Routine.style';
import * as SS from '../../styles/Routine/CardSection.style';

function ExerciseCard({ id, type, part, name, numbers, sets, duration, calories,  addExercise, openCard }) {
  const clickAddExercise = () => {
    addExercise({
      id,
      type,
      part,
      name,
      numbers,
      sets,
      duration,
    })
  }
  return (
    <S.ExerciseCard openCard={openCard}>
      <SS.CardText>{type}/{part}</SS.CardText>
      <SS.CardMainText>{name}</SS.CardMainText>
      <SS.AddExerciseButton onClick={() => clickAddExercise()}>루틴에 추가🏋🏻‍♀️ </SS.AddExerciseButton>
    </S.ExerciseCard> 
  )
}

export default ExerciseCard;

