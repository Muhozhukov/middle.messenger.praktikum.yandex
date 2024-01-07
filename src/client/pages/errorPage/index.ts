import Block from '../../utils/Block';
import { render } from '../../utils/render';
import template from './errorPage.hbs';

// interface ErrorPageProps {
//   errorCode: number | string;
//   description: string
// }
export class ErrorPage extends Block {
  constructor() {
    super({
      errorCode: 404,
      description: 'Не туда попали',
      onButtonClick: () => render('chat')
    })
  }
  render() {
    return this.compile(template, this.props);
  }
}
