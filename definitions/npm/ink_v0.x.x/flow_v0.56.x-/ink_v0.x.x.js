declare module ink {
  declare type VNode = React$Element;

  declare export function render(
    tree: VNode,
    stream: stream$WritableStream
  ): () => void;

  declare export function renderToString(tree: VNode, prevTree?: VNode): string;

  declare export function diff(
    prevNode: React$Node,
    nextNode: React$Node,
    onUpdate: Function,
    context: Object
  ): React$Node;

  declare export function build(
    nextTree: VNode,
    prevTree: VNode,
    onUpdate?: Function,
    context?: Object
  ): React$Node;

  declare export class Component<P, S = void> extends React$Component<P, S> {}
  declare export class StringComponent extends Component<{}> {}
  declare export class Indent extends Component<{ size: number, indent: string }> {}
  declare export class Text extends Component<{}> {}
}
