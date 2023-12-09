import Block from "../../utils/Block";
import input from "./input.tmpl";
import Handlebars from "handlebars";
// import { compile } from "../../utils/compile";

type BlockProps = {
  [key: string]: any;
}

export default class Button extends Block {
  static template = Handlebars.compile(input)
  constructor(props: BlockProps) {
    super(props);
  }

  render() {
    return this.compile(Button.template, this.props);
  }
}
