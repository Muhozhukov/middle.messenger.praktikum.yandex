const getParentNode = (input: HTMLInputElement) => {
  return input.parentNode as HTMLElement;
}

export function handleFocusInput (input: HTMLInputElement): void {
  const placeholder = getParentNode(input).querySelector('.input__placeholder') as HTMLElement
  placeholder.classList.add('input__placeholder_active')
}

export function handleFocusoutInput (input: HTMLInputElement): void {
  if (input.value.length === 0) {
    const placeholder = getParentNode(input).querySelector('.input__placeholder') as HTMLElement
    placeholder.classList.remove('input__placeholder_active')
  }
}
