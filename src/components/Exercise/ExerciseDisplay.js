import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Exercise/Exercise.style'


function ExerciseDisplay({ key, type, part, name, numbers, sets, duration, nextExercise, calories }) {

  const [count, setCount] = useState(Math.round(numbers*duration))
  const [numberSets, setNumberSets] = useState(1)

  useEffect(() => {
    let interval = setInterval(() => {
      if(count > 0) {
        setCount(count-1);
      }
      if(count === 0 ) {
        clearInterval(interval);
        if (numberSets !== sets){
          setNumberSets(numberSets+1);
          setCount(numbers*duration);
        } else {
          nextExercise();
        }
      }
    }, 1000)
    return () => clearInterval(interval);
  }, [count])


  return (
    <>
      <S.Exercise>
        <S.ExerciseText>{type}/{part}</S.ExerciseText>
        <S.Exercise>{name}</S.Exercise>
      </S.Exercise>
      <S.Exercise>
        <S.Exercise>세트당 <S.TextSpan>{numbers}</S.TextSpan>회 실시하세요</S.Exercise>
        <S.Exercise><S.TextSpan>{sets}</S.TextSpan>세트 중 <S.TextSpan>{numberSets}</S.TextSpan>번째 세트입니다</S.Exercise>
      </S.Exercise>
      <S.Exercise>CountDown:<S.TextSpan> {count}</S.TextSpan></S.Exercise>
      
    </>
   
  )
}

export default ExerciseDisplay;