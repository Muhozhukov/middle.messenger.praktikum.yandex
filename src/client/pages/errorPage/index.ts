import { Routes } from '../../index.ts';
import Block from '../../utils/Block.ts';
import Router from '../../utils/Router.ts';
import template from './errorPage.hbs';

export class ErrorPage extends Block {
  constructor() {
    super({
      errorCode: 404,
      description: 'Не туда попали',
      onButtonClick: () => Router.go(Routes.Chat)
    })
  }
  render() {
    return this.compile(template, this.props);
  }
}
