import Block from '../../utils/Block';
import template from './button.tmpl.hbs';

interface ButtonProps {
  label: string;
  class: string;
  type?: 'submit' | 'button',
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
