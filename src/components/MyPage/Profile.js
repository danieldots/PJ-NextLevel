import { useEffect } from "react";
import * as S from "../../styles/MyPage/Profile.style"

function Profile() {
  let profileData = JSON.parse(localStorage.getItem("Profile Data"))
  const userName = profileData.name;
  const userAge = profileData.age;
  const userGender = profileData.gender;
  const userHeight = profileData.height;
  const userWeight = profileData.height;
  const userBMI = userWeight/(userHeight)*(userHeight)

  return (
    <S.Box>
      <div>유저 프로필 사진, 현재 수준은</div>
      <div>
        {userName} 님, <br />
        현재 키: {userHeight}cm <br />
        현재 몸무게: {userWeight} 
        {userName} 님의 BMI(비만도 지수)는 {userBMI}입니다. 
      </div>
    </S.Box>
  )
}

export default Profile;