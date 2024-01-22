import Button from './components/button/index.ts';
import { registerComponent } from './utils/registerComponent.ts';
import Input from './components/input/index.ts';
import ChatListItem from './components/chatListItem/index.ts';
import Message from './components/message/index.ts';
import Form from './components/form/index.ts';
import Label from './components/label/index.ts';
import InputError from './components/inputError/index.ts';
import { LoginPage } from './pages/login/index.ts';
import { ChatPage } from './pages/chat/index.ts';
import { SignupPage } from './pages/signup/index.ts';
import { ProfilePage } from './pages/profile/index.ts';
import { ErrorPage } from './pages/errorPage/index.ts';
import Router from './utils/Router.ts';
import userAuthController from './controllers/userAuthController.ts';
import {Popup, Modal} from './components/popup/index.ts';
import chatController from './controllers/chatController.ts';

export const Routes = {
  Login: '/',
  Signup: '/sign-up',
  Chat: '/messenger',
  Profile: '/settings',
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

console.log(Router)
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
