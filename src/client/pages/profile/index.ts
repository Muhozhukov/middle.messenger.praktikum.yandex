import Handlebars from 'handlebars';
import template from './profile.hbs';
import Block from '../../utils/Block';
import avatar from '../../../../static/circleIcon.svg';
import buttonIcon from '../../../../static/sendMessageIcon.svg'
import { inputs, getDefaultButtons, getInputs } from './components';
import Router from '../../utils/Router';
import store, { withStore } from '../../utils/Store';
import usersController from '../../controllers/usersController';
import isEqual from '../../utils/isEqual';

Handlebars.registerHelper('formWithoutBorder', (border: boolean): string => {
  return border ? 'form_without-border' : '';
});

const avatarPath = 'https://ya-praktikum.tech/api/v2/resources/';

type inputType = {
  label: string,
  name: string,
  type: string,
  errorId: string,
  value: string
}

const handleFormSubmit = (e: Event, block: Block) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  const formData = new FormData(form);
  if (formData.get('oldPassword')) {
    usersController.changePassword(form);

    block.setProps({ inputs: getInputs()});
    block.setProps({ buttons: getDefaultButtons(block) });
    return;
  }
  usersController.updateUserInfo(form);
  block.setProps({ inputs: getInputs()});
  block.setProps({ buttons: getDefaultButtons(block) });
};

const handleAvatarClick = (block: Block) => {
  block.setProps({ popupVisibility: 'visible'})
};

const handleClosePopup = (e: Event, block: Block) => {
  const target = e.target as HTMLElement;
  if (target.className.includes('visible')) {
    block.setProps({ popupVisibility: 'hiden'});
  }
}

const handleChangeAvatar = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  usersController.updateUserAvatar(form);
};

class ProfilePageBase extends Block {
  constructor() {
    super({
      profileName: 'Название профиля',
      backwardClick: () => Router.go('/chat'),
      onSubmitForm: (e: Event) => handleFormSubmit(e, this),
      avatar,
      buttonIcon,
      popupVisibility: 'hiden',
      onAvatarClick: () => handleAvatarClick(this),
      onClosePopup: (e: Event) => handleClosePopup(e, this),
      onAvatarChange: (e: Event) => handleChangeAvatar(e),
      withoutBorder: true,
    })
  }

  init() {
    const userState = store.getState().user;
    this.setProps({ inputs: getInputs()});
    this.setProps({ buttons: getDefaultButtons(this) });
    if (userState) this.setProps({avatar: `${avatarPath}${userState.avatar}`});
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (isEqual(oldProps, newProps)) {
      return false
    }

    if (!isEqual(oldProps.user, newProps.user)) {
      this.setProps({inputs: inputs.map((input: inputType) => ({...input, value: newProps.user[input.name]}))})
      this.setProps({avatar: `${avatarPath}${newProps.user.avatar}`});
    }
    return true
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore(state => {
  return { user: state.user }
});
export const ProfilePage = withUser(ProfilePageBase);
