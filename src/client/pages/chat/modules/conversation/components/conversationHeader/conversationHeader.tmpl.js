import settingsIcon from '../../../../../../../../static/threeDotsIcon.svg';
import settingsModal from '../settingsModal/settingsModal.tmpl';

const header = `
  <div class="conversation__header">
    <div class="conversation__chat-name-container">
      <img class="conversation__avatar" src={{avatar}} alt="аватар">
      <p class="conversation__chat-name">{{chatName}}</p>
    </div>
    <button class="conversation__settings-button">
      <img src=${settingsIcon} alt="настройки">
    </button>
    ${settingsModal}
  </div>
`;

export default header;
