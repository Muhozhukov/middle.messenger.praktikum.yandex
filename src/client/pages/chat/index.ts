import template from './chat.hbs';
import Block from '../../utils/Block';
import searchIcon from '../../../../static/searchIcon.svg';
import Handlebars from 'handlebars';
import settingsIcon from '../../../../static/threeDotsIcon.svg'
import sendMessageIcon from '../../../../static/sendMessageIcon.svg';
import attachIcon from '../../../../static/attachIcon.svg';
import avatar from '../../../../static/circleIcon.svg';
// import { data } from './fakeData';
// import { fakeMessages } from './fakeMessages';
import Router from '../../utils/Router';
import store, { withStore } from '../../utils/Store';
import chatController from '../../controllers/chatController';
import isEqual from '../../utils/isEqual';
import messagesController from '../../controllers/messageController';

Handlebars.registerHelper('isMineMessage', (isMine) => {
  return isMine === 'true' ? 'message_mine' : 'message_member';
});

const handleFormSubmit = (e: Event, block: Block) => {
  console.log(store.getState())
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const message = formData.get('message')
  messagesController.sendMessage(block.props.selectedChat!, message as string);
  console.log(Object.fromEntries(formData))
};

const openCreateChatPopup = (block: Block) => {
  block.setProps({ popupVisibility: 'visible'})
}

const handleClosePopup = (e: Event, block: Block) => {
  const target = e.target as HTMLElement;
  if (target.className.includes('visible')) {
    block.setProps({ popupVisibility: 'hiden'});
  }
}

const handleCreateChat = (e: Event) => {
  e.preventDefault();
  const form = new FormData(e.target as HTMLFormElement);

  const title = form.get('title');

  chatController.create(title as string)
};

class ChatPageBase extends Block {
  constructor() {
    super({
      searchIcon,
      settingsIcon,
      sendMessageIcon,
      attachIcon,
      avatar,
      chatName: 'Название чата',
      toProfilePage: () => Router.go('/profile'),
      onSubmitForm: (e: Event) => handleFormSubmit(e, this),
      onSettingsClick: () => Router.go('/errorPage'),
      onCreateChatClick: () => openCreateChatPopup(this),
      onChatCreate: (e: Event) => handleCreateChat(e),
      // chats: [],
      // messages: fakeMessages,
      popupVisibility: 'hiden',
      onClosePopup: (e: Event) => handleClosePopup(e, this),
    });
  }

  protected init() {
    const chats = store.getState().chats;
    if (chats) {
      this.setProps({ chats: this.createChats(chats) });
    } else {
      this.setProps({ chats: this.createChats([]) });
    }

    // this.props.messages = this.createMessages(this.props) || [];
  }

  private createChats(chats) {
    return chats.map(data => {
      return {
        ...data,
        onClick: () => {
            console.log(data.id)
            chatController.selectChat(data.id);
          }
      }});
    }

    private createMessages(props) {
      console.log(props.messages)
      return props.messages.map(data => {
        return {...data };
      })
    }

    protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
      console.log(isEqual(oldProps, newProps))
      if (isEqual(oldProps, newProps)) {
        return false;
      }
      // this.setProps({ chats: this.createChats(newProps.chats)});
      // здесь происходит зацикливание
      return true;
    }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => {
  console.log(state);
  return {
    chats: [...(state.chats || [])],
    // selectedChat: state.selectedChat,
    // messages: state.messages,
    // userId: state.userId
  }
});

export const ChatPage = withChats(ChatPageBase);
