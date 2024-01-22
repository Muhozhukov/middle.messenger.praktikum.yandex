import Block from '../../utils/Block.ts';
import template from './inputError.hbs';

interface InputErrorProps {
  errorText: string,
  id: string,
}
export default class InputError extends Block {
  constructor(props: InputErrorProps) {
    super({...props})
  }

  render() {
    return this.compile(template, this.props);
  }
}
