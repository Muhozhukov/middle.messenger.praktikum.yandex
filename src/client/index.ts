import { render } from './utils/render';
import Button from './components/button';
import { registerComponent } from './utils/registerComponent';
import Input from './components/input';
import ChatListItem from './components/chatListItem';
import Message from './components/message';
import Form from './components/form';
import Label from './components/label';
import InputError from './components/inputError';

registerComponent('Button', Button);
registerComponent('Message', Message);
registerComponent('Input', Input);
registerComponent('Form', Form);
registerComponent('Label', Label);
registerComponent('InputError', InputError);
registerComponent('ChatListItem', ChatListItem);

window.addEventListener('DOMContentLoaded', () => {
  render('login')
});
