import { render } from "../../utils/render";

export const inputs = [
  {
    name: 'email',
    label: 'Почта',
    type: 'email',
    errorId: 'email-error'
  },
  {
    name: 'login',
    label: 'Логин',
    type: 'text',
    errorId: 'login-error'
  },
  {
    name: 'first_name',
    label: 'Имя',
    type: 'text',
    errorId: 'first_name-error'
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    type: 'text',
    errorId: 'second_name-error'
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
    errorId: 'phone-error'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    errorId: 'password-error'
  },
  {
    name: 'repeatPassword',
    label: 'Повторите пароль',
    type: 'password',
    errorId: 'repeatPassword-error'
  }
]

export const buttons = [
  {
    type: 'submit',
    text: 'Зарегистрироваться',
    class: 'button_primary',
  },
  {
    type: 'button',
    text: 'Войти',
    class: 'button_text',
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      render('login');
    }
  }
]
