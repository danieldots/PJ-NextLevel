import ExerciseCard from "./ExerciseCard";

function FirstPage({ firstPage, exercises, addExercise, openCard}) {
  return(
    <>
      {firstPage(exercises).map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          id={exercise.id}
          type={exercise.type}
          part={exercise.part}
          name={exercise.name}
          numbers={exercise.numbers}
          sets={exercise.sets}
          duration={exercise.duration}
          totalDuration={exercise.totalDuration}
          calories={exercise.calories} 
          totalCalories={exercise.totalCalories}
          addExercise={addExercise}
          openCard={openCard} />
      ))}
    </>
  )
}

export default FirstPage;