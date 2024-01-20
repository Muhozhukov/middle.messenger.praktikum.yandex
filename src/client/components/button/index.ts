import Block from '../../utils/Block.ts';
import template from './button.hbs';

interface ButtonProps {
  text: string;
  class: string;
  type?: 'submit' | 'reset' | 'button';
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
