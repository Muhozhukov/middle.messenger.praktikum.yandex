import Block from "../../utils/Block";
import template from './popup.hbs';
import modal from './modal.hbs';

interface PopupProps {
  onClick: () => void
  events: {
    click: () => void
  }
}

interface ModalProps {
  style: string
  visibility: string
}

export class Popup extends Block{
  constructor(props: PopupProps) {
    super({
      ...props,
      events: {
        click: props.onClick
      }
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}

export class Modal extends Block{
  constructor(props: ModalProps) {
    super({
      ...props
    })
  }

  render() {
    return this.compile(modal, this.props);
  }
}
