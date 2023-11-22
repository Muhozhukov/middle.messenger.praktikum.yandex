function handleFocusInput(input) {
  const placeholder = input.querySelector('.input__placeholder');
  placeholder.classList.add('input__placeholder_active');
  placeholder.style.top = '3px';
}

function handleFocusoutInput(input) {
  const placeholder = input.querySelector('.input__placeholder');
  placeholder.classList.remove('input__placeholder_active');
  placeholder.style.top = '50%';
}

const handleFocusInputs = (inputs) => {
  inputs.forEach((input) => {
    const inputData = input.querySelector('.input-data');
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
