import attachIcon from '../../../../../../../../static/attachIcon.svg';
import sendMessageIcon from '../../../../../../../../static/sendMessageIcon.svg';

const footer: string = `
  <div class="conversation-footer">
    <button class="conversation-footer__attach-button">
      <img src="${attachIcon}" alt="Прикрепить файл">
    </button>
    <textarea class="conversation-footer__input" type="textarea" placeholder="Сообщение"></textarea>
    <button class="conversation-footer__send-message-button">
      <img class="conversation-footer__send-message-icon" src="${sendMessageIcon}" alt="Отправить сообщение">
    </button>
  </div>
`;

export default footer;
