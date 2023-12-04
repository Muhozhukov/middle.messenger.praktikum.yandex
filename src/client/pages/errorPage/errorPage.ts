import handlebars from 'handlebars';
import { errorPageTemplate } from './errorPage.tmpl';

const template = handlebars.compile(errorPageTemplate);

const errorPage = document.getElementById('errorPage') as HTMLElement;

errorPage.innerHTML = template({
  errorCode: 404,
  description: 'Не туда попали',
});
