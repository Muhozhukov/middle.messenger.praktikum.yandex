const messageTemplate: string = `
  <div class="message {{isMine}}">
    <p class="message__text">{{messageText}}</p>
    <div class="message__time-container">
      <p class="message__time">{{messageTime}}</p>
    </div>
  </div>
`;

export default messageTemplate;
