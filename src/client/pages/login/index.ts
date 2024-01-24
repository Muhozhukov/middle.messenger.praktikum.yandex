import Block from '../../utils/Block.ts';
import template from './template.hbs'
import { inputs, buttons } from './components.ts';
import userAuthController from '../../controllers/userAuthController.ts';
import { withStore } from '../../utils/Store.ts';

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  userAuthController.login(form);
};

class LoginPageBase extends Block {
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

const loginWithStore = withStore(state => ({ user: state.user }))
export const LoginPage = loginWithStore(LoginPageBase)
