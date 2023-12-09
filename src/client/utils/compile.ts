import Handlebars from "handlebars";

type BlockProps = {
  [key: string]: any;
}

export function compile(template: string, props: BlockProps): string {
  const templateToCompile = Handlebars.compile(template);
  return templateToCompile(props);
}
