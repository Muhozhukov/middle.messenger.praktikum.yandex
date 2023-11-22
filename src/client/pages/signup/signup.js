import handlebars from 'handlebars';
import { signupTemplate } from './signup.tmpl';
import { handleFocusInputs } from '../../utils/handleFocusInput';

const template = handlebars.compile(signupTemplate);
// const data = {
//   input: {
//     label: 'Логин',
//     name: 'login',
//   },
// };
document.getElementById('signup').innerHTML = template();
const inputs = document.querySelectorAll('.input');
handleFocusInputs(inputs);
