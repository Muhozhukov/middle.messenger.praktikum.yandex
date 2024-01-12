import template from './chat.hbs';
import Block, { Props } from '../../utils/Block';
import searchIcon from '../../../../static/searchIcon.svg';
import Handlebars from 'handlebars';
import settingsIcon from '../../../../static/threeDotsIcon.svg'
import sendMessageIcon from '../../../../static/sendMessageIcon.svg';
import attachIcon from '../../../../static/attachIcon.svg';
import avatar from '../../../../static/circleIcon.svg';
import plusIcon from '../../../../static/addIcon.svg';
import removeIcon from '../../../../static/removeIcon.svg';
import Router from '../../utils/Router';
import store, { withStore } from '../../utils/Store';
import chatController from '../../controllers/chatController';
import isEqual from '../../utils/isEqual';
import messagesController from '../../controllers/messageController';
import { formatTime } from '../../utils/helpers';
import usersController from '../../controllers/usersController';
import { User } from '../../api/auth-api';
import { Message } from '../../controllers/messageController';
import { ChatInfo } from '../../api/chat-api';

const icons = {
  searchIcon,
  settingsIcon,
  sendMessageIcon,
  attachIcon,
  plusIcon,
  avatar,
  removeIcon,
};

Handlebars.registerHelper('isMineMessage', (isMine) => {
  return isMine === true ? 'message_mine' : 'message_member';
});

const handleSendMessage = (e: Event, block: Block) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const message = formData.get('message')
  messagesController.sendMessage(block.getProps('selectedChat'), message as string);
  const chatWindow = document.querySelector('.conversation__messages-container')
  chatWindow?.scrollTo(0, chatWindow.scrollHeight)
};

const openCreateChatPopup = (block: Block) => {
  block.setProps({ addChatPopup: 'visible'})
}

const openDeleteUserPopup = (block: Block) => {
  block.setProps({deleteUserPopup: 'visible'})
};

const openAddUserPopup = (block: Block) => {
  block.setProps({addUserPopup: 'visible'})
};

const handleClosePopup = (e: Event, block: Block) => {
  const target = e.target as HTMLElement;
  if (target.className.includes('visible')) {
    block.setProps({
      addChatPopup: 'hiden',
      addUserPopup: 'hiden',
      deleteUserPopup: 'hiden'
    });
  }
}

const handleCreateChat = (e: Event) => {
  e.preventDefault();
  const form = new FormData(e.target as HTMLFormElement);

  const title = form.get('title');

  chatController.create(title as string)
};

const handleOptionsClick = (block: Block) => {
  const visibility = block.getProps('chatOptionsVisibility');
  if (visibility === 'popup_hiden') {
    block.setProps({chatOptionsVisibility: 'popup_visible'});
  } else {
    block.setProps({chatOptionsVisibility: 'popup_hiden'});
  }
}

const handleAddUser = async (e: Event, block: Block) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const chatId = block.getProps('selectedChat');
  const userList: User[] = await usersController.searchUsers(formData.get('login') as string)
  const user = userList[0];


  chatController.addUserToChat(chatId, user.id)

  block.setProps({addUserPopup: 'hiden'});
};

const handleDeleteUser = async (e: Event, block: Block) => {
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  block.setProps({deleteUserPopup: 'hiden'});
  const chatId = block.getProps('selectedChat');

  const userList: User[] = await usersController.searchUsers(formData.get('login') as string)
  const user = userList[0];

  chatController.deleteUserFromChat(chatId, user.id)

  block.setProps({addUserPopup: 'hiden'});
};

class ChatPageBase extends Block {
  constructor() {
    super({
      icons,
      avatar,
      toProfilePage: () => Router.go('/profile'),
      onSubmitForm: (e: Event) => handleSendMessage(e, this),
      onOptionsClick: () => handleOptionsClick(this),
      addChatPopup: 'hiden',
      onCreateChatClick: () => openCreateChatPopup(this),
      onChatCreate: (e: Event) => handleCreateChat(e),
      addUserPopup: 'hiden',
      openAddUserPopup: () => openAddUserPopup(this),
      onAddUser: (e: Event) => handleAddUser(e, this),
      handleClosePopup: (e: Event) => handleClosePopup(e, this),
      chatOptionsVisibility: 'popup_hiden',
      deleteUserPopup: 'hiden',
      openRemoveUserPopup: () => openDeleteUserPopup(this),
      onDeleteUser: (e: Event) => handleDeleteUser(e, this),
    });
  }

  protected init() {
    const {chats} = store.getState();
    if (chats) {
      this.setProps({ chats: this.createChats(chats) });
    } else {
      this.setProps({ chats: this.createChats([]) });
    }

    this.props.messages = this.createMessages(this.props) || [];
  }

  private createChats(chats: ChatInfo[]) {
    return chats.map(data => {
      const regexp = /^(?:[01]\d|2[0-3]):[0-5]\d$/
      // проверяет соответствие data.last_message.time типу чч:мм
      if (!regexp.test(data.last_message.time)) {
        data.last_message.time = formatTime(data.last_message.time)
      }
      return {
        ...data,
        onClick: () => {
            chatController.selectChat(data.id);
            this.setProps({ chatName: data.title })
          }
      }});
    }

    private createMessages(props: Props) {
      if (props.messages) {
        return props.messages.map((data: Message) => {
          const time = formatTime(data.time)
          return {...data, time, isMine: props.userId === data.user_id };
        })
      } else {
        return []
      }
    }

    protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
      if (isEqual(oldProps, newProps)) {
        return false;
      }
      return true;
    }

  render() {
    const propsToRender = {...this.props}
    const { chats, messages } = store.getState();
    if (chats) {
      propsToRender.chats = this.createChats(chats);
    }
    if (messages) {
      propsToRender.messages = this.createMessages(this.props);
    }
    return this.compile(template, propsToRender);
  }
}

const withChats = withStore((state) => {
  const selectedChatId = state.selectedChat || 0;
  return {
    chats: [...(state.chats || [])],
    selectedChat: state.selectedChat,
    messages: (state.messages || {})[selectedChatId] || [],
    userId: state?.user?.id
  }
});

export const ChatPage = withChats(ChatPageBase);
