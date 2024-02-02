import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const InputMaskContainer = styled.div`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    padding: 12px;
    font-size: 18px;
    border: 0px solid #0003;
    border-radius: 5px;
    box-sizing: border-box;
    background: #f0f2f5;

    &:focus {
      border-color: transparent; /* Remove a borda ao clicar */
      outline: none; /* Remove a borda de foco padrão */
    }

  /* Adicione outros estilos conforme necessário */

  ${({ error }) =>
    error &&
    `
    & input {
      color: red;
      font-size: 14px;
    }
  `}
`;
