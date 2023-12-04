import Handlebars from 'handlebars';
import button from '../../components/button/button.tmpl';

Handlebars.registerPartial('buttonPartial', button);

const errorPageTemplate: string = `
<main class="error-page">
  <h1 class="page-title">{{errorCode}}</h1>
  <p class="page-description">{{description}}</p>
  <a href="/">
    {{>buttonPartial buttonText="Назад к чатам" buttonClass="button_text"}}
  </a>
</main>`;

export { errorPageTemplate };
