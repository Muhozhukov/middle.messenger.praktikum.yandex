import handlebars from 'handlebars';
import { chatPageTemplate } from './chat.tmpl';
import { data } from './fakeData';
import { fakeMessages } from './fakeMessages';
import Button from '../../components/button/Button';
import { render } from '../../utils/renderDOM';
import Block from '../../utils/Block';

// const button = new Button({
//   buttonClass: 'button_primary',
//   buttonText: 'Button to test',
//   settings: {
//     withInternalId: true,
//   },
//   events: {
//     click: () => {
//       console.log(123)
//     }
//   }
// });

// render('#chat', button);

export class ChatPage extends Block {
  static template = handlebars.compile(chatPageTemplate);
  constructor() {
    super({});
  }

  render() {
    return this.compile(ChatPage.template, this.props);
  }
}

const chatPage = new ChatPage({
  fakeData: data,
  fakeMessages,
  settings: {
    withInternalId: true
  }
})

render('#chat', chatPage)
// setTimeout(() => {
//   button.setProps({
//     buttonClass: 'button_danger',
//     buttonText: 'Click me, please',
//   });
// }, 1000);

// const template = handlebars.compile(chatPageTemplate);
// console.log(template({
//   fakeData: data,
//   fakeMessages,
// }));
// const chatPage = document.getElementById('chat') as HTMLElement;

// chatPage.innerHTML = template({
  // fakeData: data,
  // fakeMessages,
// });
