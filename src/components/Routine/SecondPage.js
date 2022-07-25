import ExerciseCard from "./ExerciseCard";

function SecondPage({ secondPage, exercises, addExercise, openCard}) {
  return(
    <>
      {secondPage(exercises).map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          id={exercise.id}
          type={exercise.type}
          part={exercise.part}
          name={exercise.name}
          numbers={exercise.numbers}
          sets={exercise.sets}
          duration={exercise.duration}
          calories={exercise.calories}
          addExercise={addExercise} 
          openCard={openCard} />
      ))}
    </>
  )
}

export default SecondPage;