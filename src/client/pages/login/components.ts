import { render } from "../../utils/render";

export const inputs = [
  {
    name: 'login',
    label: 'Логин',
    type: 'text',
    errorId: 'login-error'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    errorId: 'password-error'
  }
];

export const buttons = [
  {
    text: 'Войти',
    type: 'submit',
    class: 'button_primary'
  },
  {
    type: 'button',
    text: 'Нет аккаунта?',
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      render('signup');
    },
    class: 'button_text'
  }
];
