import Button from './components/button';
import { registerComponent } from './utils/registerComponent';
import Input from './components/input';
import ChatListItem from './components/chatListItem';
import Message from './components/message';
import Form from './components/form';
import Label from './components/label';
import InputError from './components/inputError';
import { LoginPage } from './pages/login';
import { ChatPage } from './pages/chat';
import { SignupPage } from './pages/signup';
import { ProfilePage } from './pages/profile';
import { ErrorPage } from './pages/errorPage';
import Router from './utils/Router';
import userAuthController from './controllers/userAuthController';
import {Popup, Modal} from './components/popup';
import chatController from './controllers/chatController';
import ChatsList from './components/chatList';

const Routes = {
  Login: '/',
  Signup: '/signup',
  Chat: '/chat',
  Profile: '/profile',
  NotFound: '404',
};

registerComponent('Button', Button);
registerComponent('Message', Message);
registerComponent('Input', Input);
registerComponent('Form', Form);
registerComponent('Label', Label);
registerComponent('InputError', InputError);
registerComponent('ChatListItem', ChatListItem);
registerComponent('Popup', Popup);
registerComponent('Modal', Modal);
registerComponent('ChatList', ChatsList);

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Login, LoginPage)
    .use(Routes.Signup, SignupPage)
    .use(Routes.Chat, ChatPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.NotFound, ErrorPage);

  try {
    Router.start();
    await userAuthController.getUser();
    await chatController.fetchChats();
  } catch (e) {
    console.log(e);
    Router.start();
  }
});
