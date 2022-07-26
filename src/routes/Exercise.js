import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExerciseDisplay from "../components/Exercise/ExerciseDisplay";
import * as S from '../styles/Exercise/Exercise.style'
import { ExerciseCard } from "../styles/Routine/Routine.style";


function Exercise() {
  const navigate = useNavigate()
  const location = useLocation()
  const { routine } = location.state
  const exercises = routine.filter((exercise) => exercise.type)

  const [exerciseIdx, setExeciseIdx] = useState(0)

  const [exercise, setExercise] = useState([])

  const nextExercise = () => {
    setExeciseIdx(prev => prev+1)
  }
  
  useEffect(() => {
    setExercise([exercises[exerciseIdx]])
  }, []) 

  return (
    <S.Container>
      {exercise.map((exercise, idx) => (
        <ExerciseDisplay
          key={idx}
          type={exercise.type}
          part={exercise.part}
          name={exercise.name}
          numbers={exercise.numbers}
          sets={exercise.sets}
          duration={exercise.duration}
          calories={exercise.calories} 
          nextExercise={nextExercise}
        />
      ))}
    </S.Container>
      

  )
};

export default Exercise;