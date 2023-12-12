import Block from '../../utils/Block';
import template from './chatListItem.hbs';
import avatar from '../../../../static/circleIcon.svg';

interface ChatListItemProps {
  icon: string;
  chatName: string;
  chatLastMessage: string;
  lastMessageDate: string;
  unreadedMessages: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export default class ChatListItem extends Block {
  constructor(props: ChatListItemProps) {
    super({
      ...props,
      avatar,
      events: {
        click: props.onClick
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
