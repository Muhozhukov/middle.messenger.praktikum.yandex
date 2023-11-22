import chatList from './modules/chatList/chatList.tmpl';
import conversation from './modules/conversation/conversation.tmpl';

const chatPageTemplate = `
  <main class="chat-page">
    ${chatList}
    ${conversation}
  </main>`;
export { chatPageTemplate };
