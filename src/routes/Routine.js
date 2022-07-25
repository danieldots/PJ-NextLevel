import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardSection from '../components/Routine/CardSection';
import ExerciseCard from '../components/Routine/ExerciseCard';
import FirstPage from '../components/Routine/FirstPage';
import SecondPage from '../components/Routine/SecondPage';
import ConfirmSection from '../components/Routine/ConfirmSection';
import * as S from '../styles/Routine/Routine.style';
import RoutineCard from '../components/Routine/RoutineCard';

function Routine() {
  const exercises = [
    {
      id: 1,
      type: '유산소',
      part: '전신',
      name: '버피',
      numbers: 0,
      sets: 0,
      duration: 4,
      calories: 2.5
    },
    {
      id: 2,
      type: '유산소',
      part: '하체',
      name: '자전거 타기',
      numbers: 0,
      sets: 0,
      duration: 600,
      calories: 100
      },
    {
      id: 3,
      type: '유산소',
      part: '전신',
      name: '마운틴 클라이머',
      numbers: 0,
      sets: 0,
      duration: 1,
      calories: 1
      },
    {
      id: 4,
      type: '유산소',
      part: '전신',
      name: 'PT 체조',
      numbers: 0,
      sets: 0,
      duration: 2,
      calories: 1
      },
    {
      id: 5,
      type: '근력 운동',
      part: '가슴',
      name: '벤치프레스',
      numbers: 0,
      sets: 0,
      duration: 3,
      calories: 0.15
      },
    {
      id: 6,
      type: '근력 운동',
      part: '하체',
      name: '스쿼트',
      numbers: 0,
      sets: 0,
      duration: 4,
      calories: 0.25
      },
    {
      id: 7,
      type: '근력 운동',
      part: '하체',
      name: '런지',
      numbers: 0,
      sets: 0,
      duration: 1.5,
      calories: 0.2
      },
    {
      id: 8,
      type: '근력 운동',
      part: '등',
      name: '데드리프트',
      numbers: 0,
      sets: 0,
      duration: 3,
      calories: 0.2
      },
    {
      id: 9,
      type: '코어강화',
      part: '복부',
      name: '크런치',
      numbers: 0,
      sets: 0,
      duration: 0.8,
      calories: 0.25
      },
    {
      id: 10,
      type: '코어강화',
      part: '전신',
      name: '플랭크',
      numbers: 0,
      sets: 0,
      duration: 60,
      calories: 20
      },
    {
      id: 11,
      type: '코어강화',
      part: '전신',
      name: '버드독',
      numbers: 0,
      sets: 0,
      duration: 2.5,
      calories: 0.3
      },
    {
      id: 12,
      type: '코어강화',
      part: '전신',
      name: '사이드플랭크',
      numbers: 0,
      sets: 0,
      duration: 60,
      calories: 20
      },
    {
      id: 13,
      type: '유연성강화',
      part: '햄스트링',
      name: '햄스트링 스트레칭',
      numbers: 0,
      sets: 0,
      duration: 20,
      calories: 2
      },
    {
      id: 14,
      type: '유연성강화',
      part: '하체',
      name: '다리 스트레칭',
      numbers: 0,
      sets: 0,
      duration: 20,
      calories: 2
      }   ,
    {
      id: 15,
      type: '유연성강화',
      part: '어깨',
      name: '어깨 스트레칭',
      numbers: 0,
      sets: 0,
      duration: 20,
      calories: 2
      },
    {
      id: 16,
      type: '유연성강화',
      part: '허리',
      name: '고양이 스트레칭',
      numbers: 0,
      sets: 0,
      duration: 20,
      calories: 2
      }   
  ]
  //카드 오픈 state
  const [openCard, setOpenCard] = useState(false)
  const addRoutine = () => {
    setOpenCard(prev => !prev)
  }

  //루틴 컨펌
  const [routineList, setRoutineList] = useState([])

  const confirmRoutine = () => {
    setOpenCard(prev => !prev);
    routineList.push(routineExercises)
    localStorage.setItem("Routine List", JSON.stringify(routineList));
    setRoutineExercises([]);
    paintRoutines();
    console.log(savedRoutines)
  }

  //루틴 그리기 
  const [savedRoutines, setSavedRoutines] = useState([])
  const paintRoutines = () => {
    setSavedRoutines(JSON.parse(localStorage.getItem("Routine List")))
  } ;

  //페이지 시작시 루틴 그리기
  useEffect(() => {
    paintRoutines();
  }, [])

  //페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const firstPage = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const secondPage = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfLast, posts.length)
    return currentPosts;
  }
  //페이지 보여주기
  const [page, setPage] = useState(true)
  const clickFirstPage = () => {
    setPage(true)
  }
  const clickSecondPage = () => {
    setPage(false)
  }

  //추가된 운동카드 
  let [routineExercises, setRoutineExercises] = useState([]);
  const addExercise = (routineExercise) => {
    setRoutineExercises([
      ...routineExercises,
      routineExercise
    ])
  };

  //운동횟수 추가
  const addNumbers = (index) => {
    const routineWithNumbers = routineExercises.map((routineExercise, idx) => {
      if (idx === index) {      
        return {
          ...routineExercise,
          numbers: routineExercise.numbers + 5,
        };
      } else {
        return routineExercise
      }
    });
    setRoutineExercises(routineWithNumbers);
  }

    //운동횟수 감소
    const decreaseNumbers = (index) => {
      const routineWithNumbers = routineExercises.map((routineExercise, idx) => {
        if (idx === index) {      
          return {
            ...routineExercise,
            numbers: routineExercise.numbers - 5,
          };
        } else {
          return routineExercise
        }
      });
      setRoutineExercises(routineWithNumbers);
    }

  //세트 추가
  const addSets = (index) => {
    const routineWithSets = routineExercises.map((routineExercise, idx) => {
      if (idx === index) {      
        return {
          ...routineExercise,
          sets: routineExercise.sets + 1,
        };
      } else {
        return routineExercise
      }
    });
    setRoutineExercises(routineWithSets);
  }

   //세트 감소
   const decreaseSets = (index) => {
    const routineWithSets = routineExercises.map((routineExercise, idx) => {
      if (idx === index) {      
        return {
          ...routineExercise,
          sets: routineExercise.sets - 1,
        };
      } else {
        return routineExercise
      }
    });
    setRoutineExercises(routineWithSets);
  }

  return (
    <S.Container>
      <Header route="Routine" />
      <S.Box openCard={openCard}>
        <S.RoutineList openCard={openCard}>
          <S.AddRoutineCard openCard={openCard}>
            {openCard ? 
              null : 
              <S.AddIcon onClick={addRoutine} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Circled_plus.svg/800px-Circled_plus.svg.png" />
            }
            {openCard ? 
              <ConfirmSection confirmRoutine={confirmRoutine} /> : 
              null
            }
            {openCard ? 
              <CardSection 
                routineExercises={routineExercises} 
                addNumbers={addNumbers} 
                decreaseNumbers={decreaseNumbers}
                addSets={addSets}
                decreaseSets={decreaseSets} 
                openCard={openCard}
              /> : 
              null
            }
          </S.AddRoutineCard>
          {savedRoutines.map((routine, idx) => (
            <RoutineCard key={idx} routine={routine}/>
          ))}    
        </S.RoutineList>
        {openCard ? (
          <S.CardBox openCard={openCard}>
            {page ? 
            <FirstPage firstPage={firstPage} exercises={exercises} addExercise={addExercise} openCard={openCard}/> : 
            <SecondPage secondPage={secondPage} exercises={exercises} addExercise={addExercise} openCard={openCard}/>
            }   
            <button onClick={() => clickFirstPage()}>1</button>
            <button onClick={() => clickSecondPage()}>2</button>
          </S.CardBox> 
          ): 
          null
        }
      </S.Box>
    </S.Container>
  )
}

export default Routine;