import Block from "./Block"

export function render (query: string, block: Block): Element | null {
  const root = document.querySelector(query)

  if (root !== null) {
    root.innerHTML = '';
  }
  root?.appendChild(block.getContent() as HTMLElement)
  block.dispatchComponentDidMount()

  return root
}
