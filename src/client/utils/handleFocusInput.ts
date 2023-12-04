function handleFocusInput(input: HTMLElement): void {
  const placeholder = input.querySelector('.input__placeholder') as HTMLElement;
  placeholder.classList.add('input__placeholder_active');
  placeholder.style.top = '3px';
}

function handleFocusoutInput(input: HTMLElement): void {
  const placeholder = input.querySelector('.input__placeholder') as HTMLElement;
  placeholder.classList.remove('input__placeholder_active');
  placeholder.style.top = '50%';
}

const handleFocusInputs = (inputs: NodeListOf<HTMLElement>): void => {
  inputs.forEach((input) => {
    const inputData = input.querySelector('.input-data') as HTMLInputElement;
    inputData.addEventListener('focus', () => {
      handleFocusInput(input);
    });
    inputData.addEventListener('focusout', () => {
      if (inputData.value.length > 0) return;
      handleFocusoutInput(input);
    });
  });
};

export { handleFocusInputs };
