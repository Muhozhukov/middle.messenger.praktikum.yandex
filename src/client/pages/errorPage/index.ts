import Block from '../../utils/Block';
import Router from '../../utils/Router';
import template from './errorPage.hbs';

export class ErrorPage extends Block {
  constructor() {
    super({
      errorCode: 404,
      description: 'Не туда попали',
      onButtonClick: () => Router.go('/chat')
    })
  }
  render() {
    return this.compile(template, this.props);
  }
}
