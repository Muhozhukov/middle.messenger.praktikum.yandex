import Handlebars from 'handlebars';
import chatsHeader from './components/chatsHeader/chatsHeader.tmpl';
import chatsItem from './components/chatItem/chatItem.tmpl';

Handlebars.registerPartial('chatItem', chatsItem);

const chatList: string = `
  <div class="chat-list">
    ${chatsHeader}
    {{#each fakeData}}
    {{>chatItem
      chatName=this.chatName
      chatLastMessage=this.chatLastMessage
      lastMessageDate=this.lastMessageDate
      unreadedMessages=this.unreadedMessages
    }}
    {{/each}}
  </div>
`;

export default chatList;
