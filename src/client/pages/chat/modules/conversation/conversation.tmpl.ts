import Handlebars from 'handlebars';
import header from './components/conversationHeader/conversationHeader.tmpl';
import footer from './components/conversationFooter/conversationFooter.tmpl';
import message from './components/message/message.tmpl';
import circleIcon from '../../../../../../static/circleIcon.svg';

Handlebars.registerPartial('headerPartial', header);
Handlebars.registerPartial('message', message);
Handlebars.registerHelper('isMineMessage', (isMine) => {
  console.log(!!isMine)
  return isMine === 'true' ? 'message_mine' : 'message_member';
})

const conversation: string = `
  <div class="conversation">
    {{>headerPartial avatar="${circleIcon}" chatName="Название чата"}}
    <div class="conversation__messages-container">
      {{#each fakeMessages}}
      {{>message
        messageText=this.text
        messageTime=this.time
        isMine=(isMineMessage this.isMine)
      }}
      {{/each}}
    </div>
    ${footer}
  </div>
`;

export default conversation;
