import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Exercise/Exercise.style'


function ExerciseDisplay({ key, type, part, name, numbers, sets, duration, calories, nextExercise }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(numbers*duration)
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
        } else if (numberSets === sets){
          nextExercise();
        }
      }
    }, 1000)
    return () => clearInterval(interval);
  }, [count])


  return (
    <>
      <S.Exercise>{type}/{part}</S.Exercise>
      <S.Exercise>{name}</S.Exercise>
      <S.Exercise>{count}</S.Exercise>
      <S.Exercise>{numberSets}/{sets}</S.Exercise>
    </>
   
  )
}

export default ExerciseDisplay;