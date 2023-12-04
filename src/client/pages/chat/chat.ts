import handlebars from 'handlebars';
import { chatPageTemplate } from './chat.tmpl';
import { data } from './fakeData';
import { fakeMessages } from './fakeMessages';

const template = handlebars.compile(chatPageTemplate);

const chatPage = document.getElementById('chat') as HTMLElement;

chatPage.innerHTML = template({
  fakeData: data,
  fakeMessages,
});
