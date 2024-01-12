import template from './signup.hbs';
import Block from '../../utils/Block';
import { inputs, buttons } from './components';
import userAuthController from '../../controllers/userAuthController';

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  userAuthController.signup(form);
};

export class SignupPage extends Block {
  constructor() {
    super({
      inputs,
      buttons,
      onSubmitForm: (e: Event) => handleFormSubmit(e),
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
