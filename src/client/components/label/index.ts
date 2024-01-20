import Block from '../../utils/Block.ts';
import template from './label.hbs';

interface LabelProps {
  name: string,
  label: string,
}
export default class Label extends Block {
  constructor(props: LabelProps) {
    super({
      ...props
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
