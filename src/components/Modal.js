import * as S from "../styles/Home/Modal.style";

function Modal({ open, close }) {

  return(
      <S.ModalWindow open={open}>
        <S.ModalText as="a" href="/mainpage">이제 시작해볼게요!</S.ModalText>
      </S.ModalWindow>

)}

export default Modal;