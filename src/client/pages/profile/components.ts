import userAuthController from "../../controllers/userAuthController.ts";
import Block from "../../utils/Block.ts";
import store from "../../utils/Store.ts";

export const changeButton = {
  type: 'button',
  text: 'Изменить данные',
  class: 'button_text button_profile',
  onClick() {
    console.log(this)
    this.setProps({inputs: []});
    this.setProps({buttons: [
      {
        type: 'submit',
        text: 'Сохранить',
        class: 'button_primary button_profile',
      }
    ]})
  }
}

export const getInputs = (inputsToEdit = false) => {
  const userState = store.getState().user;
  if (userState) {
    return inputs.map(input => {
      const i = {
        ...input,
        value: userState[input.name],
      }

      if (inputsToEdit) {
        i.style = '_profile-active';
        i.disabled = '';
      }

      return i;
    });
  } else {
    return inputs;
  }
};

export const getDefaultButtons = (block: Block) => [
  {
    type: 'button',
    text: 'Изменить данные',
    class: 'button_text button_profile',
    onClick: function() {
      block.setProps({inputs: getInputs(true)});
      block.setProps({buttons: [
        {
          type: 'submit',
          text: 'Сохранить',
          class: 'button_primary button_profile',
        }
      ]})
    }
  },
  {
    type: 'button',
    text: 'Изменить пароль',
    class: 'button_text button_profile',
    onClick: () => {
      console.log(this)
      block.setProps({inputs: changePasswordInputs});
      block.setProps({buttons: [
        {
          type: 'submit',
          text: 'Сохранить',
          class: 'button_primary button_profile',
        }
      ]});
    }
  },
  {
    type: 'button',
    text: 'Выйти',
    class: 'button_text button_danger button_profile',
    onClick: () => {
      userAuthController.logout();
    }
  }
];

export const submitButton = {
  type: 'submit',
  text: 'Сохранить',
  class: 'button_primary button_profile'
}

export const inputs = [
  {
    label: 'Почта',
    name: 'email',
    type: 'email',
    errorId: 'email-error',
    value: 'test value',
    style: '_profile',
    disabled: 'disabled'
  },
  {
    label: 'Логин',
    name: 'login',
    type: 'text',
    errorId: 'login-error',
    value: 'test value',
    style: '_profile',
    disabled: 'disabled'
  },
  {
    label: 'Имя',
    name: 'first_name',
    type: 'text',
    errorId: 'first_name-error',
    value: 'test value',
    style: '_profile',
    disabled: 'disabled'
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    type: 'text',
    errorId: 'second_name-error',
    value: 'test value',
    style: '_profile',
    disabled: 'disabled'
  },
  {
    label: 'Имя в чате',
    name: 'display_name',
    type: 'text',
    errorId: 'display_name-error',
    value: 'test value',
    style: '_profile',
    disabled: 'disabled'
  },
  {
    label: 'Телефон',
    name: 'phone',
    type: 'tel',
    errorId: 'phone-error',
    value: 'test value',
    style: '_profile',
    disabled: 'disabled'
  }
]

export const changePasswordInputs = [
  {
    label: 'Старый пароль',
    name: 'oldPassword',
    type: 'password',
    errorId: 'oldPassword-error',
    style: '_profile-active',
    value: ''
  },
  {
    label: 'Новый пароль',
    name: 'newPassword',
    type: 'password',
    errorId: 'newPassword-error',
    style: '_profile-active',
    value: ''
  },
  {
    label: 'Повторите пароль',
    name: 'repeatPassword',
    type: 'password',
    errorId: 'repeatPassword-error',
    style: '_profile-active',
    value: ''
  }
]
