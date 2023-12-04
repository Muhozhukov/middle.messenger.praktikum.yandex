import handlebars from 'handlebars';
import { signupTemplate } from './signup.tmpl';
import { handleFocusInputs } from '../../utils/handleFocusInput';

const template = handlebars.compile(signupTemplate);

const signupPage = document.getElementById('signup') as HTMLElement;

signupPage.innerHTML = template(null);

const inputs = document.querySelectorAll<HTMLInputElement>('.input');
handleFocusInputs(inputs);
