// import inputPartial from '../../components/input/input';
import Handlebars from 'handlebars';
import input from '../../components/input/input.tmpl';
import button from '../../components/button/button.tmpl.hbs';

Handlebars.registerPartial('inputPartial', input);
Handlebars.registerPartial('buttonPartial', button);

const layout = `
<main class="login-page">
  <form class="authorize-form">
    <h1 class="login-page__title">Вход</h1>
    <div class="login-page__inputs-container">
      {{> inputPartial name="login" label="Логин" type="text"}}
      {{> inputPartial name="password" label="Пароль" type="password"}}
    </div>
    <div class="login-page__buttons-container">
    {{{enterButton}}}
    {{#each buttons}}
      {{{Button text=this.text class=this.class onClick=this.onClick}}}
    {{/each}}
    </div>
  </form>
</main>`;

export { layout };
