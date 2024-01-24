import Block from "../../utils/Block.ts";
import { handleFocusInput, handleFocusoutInput } from "../../utils/handleFocusInput.ts";
import { checkInputValidation } from "../../utils/formValidation.ts";
import inputTemplate from "./input.hbs";

interface InputProps {
  name: string;
  type: string;
  label: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focus: (e: Event) => {
          handleFocusInput(e.target as HTMLInputElement);
        },
        focusout: (e: Event) => {
          handleFocusoutInput(e.target as HTMLInputElement)
          checkInputValidation(e.target as HTMLInputElement)
        }
      }
    })
  }

  render() {
    return this.compile(inputTemplate, this.props);
  }
}
