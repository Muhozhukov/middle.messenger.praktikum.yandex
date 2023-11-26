import handlebars from 'handlebars';
import { errorPageTemplate } from './errorPage.tmpl';

const template = handlebars.compile(errorPageTemplate);

document.getElementById('errorPage').innerHTML = template({
  errorCode: 404,
  description: 'Не туда попали',
});
