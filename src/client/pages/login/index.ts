import Block from '../../utils/Block';
import template from './template.hbs'
import { inputs, buttons } from './components';
import { checkFormValidation } from '../../utils/formValidation';
import { render } from '../../utils/render';

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

export class LoginPage extends Block {
  constructor() {
    super({
      inputs,
      buttons,
      onSubmitForm: (e: Event) => handleFormSubmit(e),
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
