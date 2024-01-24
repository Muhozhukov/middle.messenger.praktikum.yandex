import Button, { ButtonProps } from './index.ts';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Button', () => {
  const buttonData = {
    text: 'login',
    class: '',
  }
  it('should render', () => {
    new Button(buttonData);
  });

  it('element should return button', () => {
    const button = new Button(buttonData);
    const element = button.element;

    expect(element).to.be.instanceof(window.HTMLButtonElement)
  });

  it('props are passed correctly for attributes', () => {
    const props: ButtonProps = {
      text: 'Button text',
      class: 'button_primary',
      type: 'button'
    }
    const button = new Button(props);
    const element = button.element as HTMLButtonElement;

    const elementText = element?.textContent?.trim();
    const elementClass = `${element?.className}`;
    const elementType = element?.type;

    const buttonAttributes = {
      text: elementText,
      class: elementClass.includes(props.class) ? props.class : 'not include',
      type: elementType
    };

    expect(buttonAttributes).to.include(props);
  });


  it('should fire onClick function', () => {
    const fake = sinon.fake();
    const input = new Button({
      ...buttonData,
      onClick: () => fake()
    });

    const element = input.element as HTMLInputElement;

    element.click();

    expect(fake.calledOnce).to.eq(true);
  });


});
