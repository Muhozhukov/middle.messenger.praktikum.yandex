type ValidationRules = {
  [key: string]: RegExp;
}

const validationRules: ValidationRules = {
  title: /^.+$/,
  first_name: /^[A-Za-zА-ЯЁа-яё][A-Za-zА-ЯЁа-яё-]*$/,
  second_name: /^[A-Za-zА-ЯЁа-яё][A-Za-zА-ЯЁа-яё-]*$/,
  display_name: /^[A-Za-zА-ЯЁа-яё][A-Za-zА-ЯЁа-яё-]*$/,
  login: /^(?!-|\d)[A-Za-z0-9_-]{3,20}(?<!-)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  password:  /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  oldPassword:  /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  newPassword:  /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  repeatPassword: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  phone:  /^\+?\d{10,15}$/,
  message: /^.+$/,
};

type ValidationErrors = {
  [key: string]: string
}
const validationErrors: ValidationErrors = {
  first_name: 'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов',
  second_name: 'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов',
  display_name: 'Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  login: 'Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  email: 'Неправильная форма записи email',
  password: 'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  oldPassword: 'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  newPassword: 'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  repeatPassword: 'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  phone: 'Номер телефона должен быть от 10 до 15 символов, состоять из цифр, может начинается с плюса',
  message: '',
}
export const checkInputValidation = (input: HTMLInputElement | HTMLTextAreaElement): boolean => {
  const errorSpan = document.getElementById(`${input.name}-error`) as HTMLElement;

  if (!validationRules[input.name].test(input.value)) {
    errorSpan.classList.add('input__error_visible');
    errorSpan.textContent = validationErrors[input.name];
    return true
  } else {
    errorSpan.classList.remove('input__error_visible');
    errorSpan.textContent = '';
    return false
  }
};

export const checkFormValidation = (form: HTMLFormElement): boolean => {
  const inputs = Array.from(form.querySelectorAll('input'));
  let formIsValid = false;

  if (inputs.length > 0) {
    inputs.forEach((i: HTMLInputElement) => {
      if (checkInputValidation(i)) {
        formIsValid = false;
      } else {
        formIsValid = true;
      }
    })
  } else {
    const textArea = form.querySelector('textarea');
    if (checkInputValidation(textArea as HTMLTextAreaElement)) {
      formIsValid = false;
    } else {
      formIsValid = true;
    }
  }
  return formIsValid;
}
