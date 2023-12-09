// import handlebars from 'handlebars';
// import { layout } from './login.tmpl';
// import { handleFocusInputs } from '../../utils/handleFocusInput';
// import { registerComponent } from '../../utils/registerComponent';
// import Button from '../../components/button/Button';
import Block from '../../utils/Block';
import template from './template.hbs'
// import { render } from '../../utils/renderDOM';

// registerComponent('Button', Button);

export class LoginPage extends Block {
  // static template = handlebars.compile(layout)

  constructor() {
    super({
      buttons: [
      {
        text: 'Войти',
        onClick: (e) => {
          e.preventDefault()
          console.log(123)
        },
        class: 'button_primary'
      },
      {
        text: 'Нет аккаунта?',
        onClick: (e) => {
          e.preventDefault()
          console.log(321)
        },
        class: 'button_text'
      }
    ]})
  }

  render() {
    return this.compile(template, this.props)
  }
}

// const login = new LoginPage()

// render('#login', login)
// const template = handlebars.compile(layout);

// const loginPage = document.getElementById('login') as HTMLElement;

// loginPage.innerHTML = template(null);

// const inputs = document.querySelectorAll<HTMLInputElement>('.input');
// handleFocusInputs(inputs);
