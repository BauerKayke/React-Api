import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
  }
  html, body, #root{
    height: 100%;
  }
  button{
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
    &:hover{
      filter: brightness(85%);
    }
  }
  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }
  ul{
    list-style: none;
  }
  /* body .Toastify .Toastify__toast-container .Toastify__toast--sucess{
    background: ${colors.errorColor};
  } */
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
  color: white;
}

.Toastify__progress-bar--success {
  background: white;
}



body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: white;
}

.Toastify__progress-bar--error {
  background: white;
}

`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
