// import inputPartial from '../../components/input/input';
import Handlebars from 'handlebars';
import input from '../../components/input/input.tmpl';

const partial = Handlebars.registerPartial('partial', input)

const layout = `
<main class="login-page-layout">
  <form class="authorize-form">
    <h1>Вход</h1>
      {{> partial name="login" label="Логин" type="text"}}
      {{> partial name="password" label="Пароль" type="password"}}
  </form>
</main>`;
export { layout };
