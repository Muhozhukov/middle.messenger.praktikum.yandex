import Handlebars from 'handlebars';
import input from '../../components/input/input.tmpl';
import button from '../../components/button/button.tmpl';

Handlebars.registerPartial('inputPartial', input);
Handlebars.registerPartial('buttonPartial', button);

const signupTemplate = `
<main class="signup-page">
  <form class="signup-form">
    <h1 class="signup-page__title">Вход</h1>
    <div class="signup-page__inputs-container">
      {{> inputPartial name="email" label="Почта" type="email"}}
      {{> inputPartial name="login" label="Логин" type="text"}}
      {{> inputPartial name="first_name" label="Имя" type="text"}}
      {{> inputPartial name="second_name" label="Фамилия" type="text"}}
      {{> inputPartial name="phone" label="Телефон" type="tel"}}
      {{> inputPartial name="password" label="Пароль" type="password"}}
      {{> inputPartial name="repeatPassword" label="Повторите пароль" type="password"}}
    </div>
    <div class="signup-page__buttons-container">
      {{> buttonPartial buttonText="Зарегистрироваться" buttonClass="button_primary"}}
      {{> buttonPartial buttonText="Войти" buttonClass="button_text"}}
    </div>
  </form>
</main>`;
export { signupTemplate };
