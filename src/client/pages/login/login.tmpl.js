// import inputPartial from '../../components/input/input';
import Handlebars from 'handlebars';
import input from '../../components/input/input.tmpl';
import button from '../../components/button/button.tmpl';

const inputPartial = Handlebars.registerPartial('inputPartial', input);
const buttonPartial = Handlebars.registerPartial('buttonPartial', button);

const layout = `
<main class="login-page">
  <form class="authorize-form">
    <h1 class="login-page__title">Вход</h1>
    <div class="login-page__inputs-container">
      {{> inputPartial name="login" label="Логин" type="text"}}
      {{> inputPartial name="password" label="Пароль" type="password"}}
    </div>
    <div class="login-page__buttons-container">
      {{> buttonPartial buttonText="Авторизоваться" buttonClass="button_primary"}}
      {{> buttonPartial buttonText="Нет аккаунта?" buttonClass="button_text"}}
    </div>
  </form>
</main>`;
export { layout };
