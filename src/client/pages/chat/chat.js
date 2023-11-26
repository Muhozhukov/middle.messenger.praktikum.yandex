import handlebars from 'handlebars';
import { chatPageTemplate } from './chat.tmpl';
import { data } from './fakeData';
import { fakeMessages } from './fakeMessages';

const template = handlebars.compile(chatPageTemplate);

document.getElementById('chat').innerHTML = template({
  fakeData: data,
  fakeMessages,
});
