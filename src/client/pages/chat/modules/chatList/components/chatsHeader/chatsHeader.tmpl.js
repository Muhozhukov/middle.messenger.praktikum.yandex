import Handlebars from 'handlebars';
import button from '../../../../../../components/button/button.tmpl';
import searchIcon from '../../../../../../../../static/searchIcon.svg';

Handlebars.registerPartial('buttonPartial', button);

const chatsHeader = `
  <div class="chats-header">
    <a class="chats-header__button" href="/profile">
      {{>buttonPartial buttonText="Профиль >" buttonClass="button_text"}}
    </a>
    <div class="chats-header__search-container">
      <input class="chats-header__search-input" type="text" placeholder="Поиск">
      <img class="chats-header__search-icon" src=${searchIcon} alt="Поиск">
    </div>
  </div>
`;

export default chatsHeader;
