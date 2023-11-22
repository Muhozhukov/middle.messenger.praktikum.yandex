import circleIcon from '../../../../../../../../static/circleIcon.svg';

const chatItem = `
  <div class="chat-item">
    <div class="chat-item__chat-info-container">
      <img class="chat-item__avatar" src=${circleIcon} alt="Аватар">
      <div class="chat-item__messages-container">
        <h6 class="chat-item__chat-title">{{chatName}}</h6>
        <p class="chat-item__chat-last-message">{{chatLastMessage}}</p>
      </div>
    </div>
    <div class="chat-item__chat-date-container">
      <p class="chat-item__last-message-date">{{lastMessageDate}}</p>
      <div class="chat-item__unreaded-message-container">
        <p class="chat-item__unreaded-message-count">{{unreadedMessages}}</p>
      </div>
    </div>
  </div>
`;

export default chatItem;
