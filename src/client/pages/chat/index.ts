import template from './chat.hbs';
import Block from '../../utils/Block';
import searchIcon from '../../../../static/searchIcon.svg';
import Handlebars from 'handlebars';
import settingsIcon from '../../../../static/threeDotsIcon.svg'
import sendMessageIcon from '../../../../static/sendMessageIcon.svg';
import attachIcon from '../../../../static/attachIcon.svg';
import avatar from '../../../../static/circleIcon.svg';
import { data } from './fakeData';
import { fakeMessages } from './fakeMessages';
import { render } from '../../utils/render';

Handlebars.registerHelper('isMineMessage', (isMine) => {
  return isMine === 'true' ? 'message_mine' : 'message_member';
});

const handleFormSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData))
};

export class ChatPage extends Block {
  constructor() {
    super({
      searchIcon,
      settingsIcon,
      sendMessageIcon,
      attachIcon,
      avatar,
      chatName: 'Название чата',
      toProfilePage: () => render('profile'),
      onSubmitForm: (e: Event) => handleFormSubmit(e),
      data: [...data],
      messages: fakeMessages
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
