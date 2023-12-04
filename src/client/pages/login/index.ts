import handlebars from 'handlebars';
import { layout } from './login.tmpl';
import { handleFocusInputs } from '../../utils/handleFocusInput';

const template = handlebars.compile(layout);

const loginPage = document.getElementById('login') as HTMLElement;

loginPage.innerHTML = template(null);

const inputs = document.querySelectorAll<HTMLInputElement>('.input');
handleFocusInputs(inputs);
