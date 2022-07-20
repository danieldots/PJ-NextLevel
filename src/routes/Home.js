import * as S from "../styles/Home/Home.style";
import 'fullpage.js';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';
import { useState } from "react";
import Modal from '../components/Modal'

function Home () {
  $(() => {
    $('#fullpage').fullpage({
      scrollOverflow: true,
    });
  });

  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };


  const [registerForm, setRegisterForm] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
  });

  const getRegisterData = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
    console.log(registerForm);
  };
  
  const submit = () => {
    localStorage.setItem('Profile Data', JSON.stringify(registerForm));
  };

  return (
    <S.Container id="fullpage">
        <S.HomeTitle className="section">당신의 다음 레벨을 확인하세요</S.HomeTitle>
        <S.HomeTitle className="section">다음섹션</S.HomeTitle>
        <S.RegisterWindow className="section">
          프로필을 등록해주세요<br />
            <div>
              이름: <S.RegisterInput name='name' onChange={getRegisterData} type='string' /><br />
              나이: <S.RegisterInput name='age' onChange={getRegisterData} /><br />
              성별: <S.RegisterInput name='gender' onChange={getRegisterData}/><br />
              키: <S.RegisterInput name='height' onChange={getRegisterData}/><br />
              몸무게: <S.RegisterInput name='weight' onChange={getRegisterData}/><br />
            </div>
          <S.RegisterButton onClick={() =>{
            submit()
            openModal()
          }}>완료!</S.RegisterButton>
          <Modal open={modalOpen} />
        </S.RegisterWindow>
    </S.Container>
  );
};

export default Home;