import { useEffect } from "react";
import * as S from "../../styles/MyPage/Profile.style"

function Profile() {
  let profileData = JSON.parse(localStorage.getItem("Profile Data"))
  const userName = profileData.name;
  const userAge = profileData.age;
  const userGender = profileData.gender;
  const userHeight = profileData.height;
  const userWeight = profileData.weight;
  const userBMI = `${Math.floor(userWeight*10000/((userHeight)*(userHeight)))}.${Math.floor(userWeight*10000%((userHeight)*(userHeight)))}`

  return (
    <S.Box>
      <S.leftBox>
        <S.textBox>
          현재 {userName}님은 <span>Level 1 </span>입니다.
        </S.textBox>
        <S.textBox>   
          다음 레벨까지 루틴이 10개 남았습니다 
        </S.textBox>
      </S.leftBox>
      <S.textBox>
        {userName} 님, <br />
        현재 키: {userHeight}cm <br />
        현재 몸무게: {userWeight} <br />
        {userName} 님의 BMI(비만도 지수)는 {userBMI}입니다. 
      </S.textBox>
    </S.Box>
  )
}

export default Profile;