import { LoginPage } from '../pages/login';
import { ChatPage } from '../pages/chat';
import { SignupPage } from '../pages/signup';
import { ProfilePage } from '../pages/profile';
import { ErrorPage } from '../pages/errorPage';

const ROUTES = {
  'chat': ChatPage,
  'profile': ProfilePage,
  'errorPage': ErrorPage,
  'login': LoginPage,
  'signup': SignupPage,
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
