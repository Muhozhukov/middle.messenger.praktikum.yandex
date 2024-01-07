import Handlebars from 'handlebars';
import template from './profile.hbs';
import Block from '../../utils/Block';
import avatar from '../../../../static/circleIcon.svg';
import buttonIcon from '../../../../static/sendMessageIcon.svg'
import { inputs, buttons } from './components';
import { render } from '../../utils/render';
import { checkFormValidation } from '../../utils/formValidation';

Handlebars.registerHelper('formWithoutBorder', (border: boolean): string => {
  return border ? 'form_without-border' : '';
});

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  const formIsValid = checkFormValidation(form);
  if (formIsValid) {
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData))
    render('chat');
  } else {
    console.log('form is invalid');
  }
};

export class ProfilePage extends Block {
  constructor() {
    super({
      profileName: 'Название профиля',
      backwardClick: () => render('chat'),
      onSubmitForm: (e: Event) => handleFormSubmit(e),
      avatar,
      buttonIcon,
      inputs,
      withoutBorder: true,
      buttons
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
