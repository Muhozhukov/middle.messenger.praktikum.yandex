import handlebars from 'handlebars';
import { layout } from './login.tmpl';

const template = handlebars.compile(layout);
// const data = {
//   input: {
//     label: 'Логин',
//     name: 'login',
//   },
// };
document.getElementById('about').innerHTML = template();

function handleFocusInput(input) {
  console.log(123);
  const placeholder = input.querySelector('.input__placeholder');
  placeholder.style.top = '5px';
  placeholder.style.fontSize = '12px';
}
function handleFocusoutInput(input) {
  const placeholder = input.querySelector('.input__placeholder');
  placeholder.style.top = '50%';
  placeholder.style.fontSize = '12px';
}
const inputs = document.querySelectorAll('.input');
console.log(inputs);
inputs.forEach((input) => {
  const inputData = input.querySelector('.input-data');
  inputData.addEventListener('focus', () => {
    handleFocusInput(input);
  });
  inputData.addEventListener('focusout', () => {
    handleFocusoutInput(input);
  });
});
