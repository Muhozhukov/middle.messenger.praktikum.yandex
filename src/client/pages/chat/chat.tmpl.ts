import chatList from './modules/chatList/chatList.tmpl';
import conversation from './modules/conversation/conversation.tmpl';

const chatPageTemplate = `
  <div class="chat-page">
    ${chatList}
    ${conversation}
    {{hello}}
  </div>`;
export { chatPageTemplate };
