import handlebars from 'handlebars';
import { layout } from './login.tmpl';
import { handleFocusInputs } from '../../utils/handleFocusInput';

const template = handlebars.compile(layout);
// const data = {
//   input: {
//     label: 'Логин',
//     name: 'login',
//   },
// };
document.getElementById('about').innerHTML = template();
const inputs = document.querySelectorAll('.input');
handleFocusInputs(inputs);
