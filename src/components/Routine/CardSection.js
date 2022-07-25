import { useState } from 'react';
import * as S from '../../styles/Routine/CardSection.style'

function CardSection({ routineExercises, addNumbers, decreaseNumbers, addSets, decreaseSets, openCard }) {
  return (  
  <S.CardSection openCard={openCard}>
    {routineExercises.map((routineExercise, i) => (
      <S.AddedExercise openCard={openCard} key={i}>
        <S.CardText>{routineExercise.type}/{routineExercise.part}</S.CardText>
        <S.CardMainText>
          {routineExercise.name} <br/>
        </S.CardMainText>
        <S.CardMainText>  
          <span>세트당 횟수: </span>
          <S.AddNumbersButton onClick={() => decreaseNumbers(i)}>-</S.AddNumbersButton>
          {routineExercise.numbers} 
          <S.AddNumbersButton onClick={() => addNumbers(i)}>+</S.AddNumbersButton><br/>
          <span>세트 수:</span> 
          <S.AddNumbersButton onClick={() => decreaseSets(i)}>-</S.AddNumbersButton> 
          {routineExercise.sets}
          <S.AddNumbersButton onClick={() => addSets(i)}>+</S.AddNumbersButton>
        </S.CardMainText>
      </S.AddedExercise>
    ))}
  </S.CardSection>)
}

export default CardSection;