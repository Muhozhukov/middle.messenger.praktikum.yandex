import chatController from "../../controllers/chatController";
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import template from './template.hbs';

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected init() {
    this.props.chats = this.createChats(this.props);
    console.log(123)
    // this.children.profileLink = new Link({ to: '/profile', label: 'Профиль'});
  }

  protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.props.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props) {
    return props.chats.map(data => {
      return {
        ...data,
        onClick: () => {
            console.log(data.id)
            chatController.selectChat(data.id);
          }
      }});
    }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props});
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

const ChatsList = withChats(ChatsListBase);

export default ChatsList;

