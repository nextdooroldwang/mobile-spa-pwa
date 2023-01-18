declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
type PureValue = any;
type PureObject = Record<string, PureValue>;
type PureArray = PureObject[];

interface Window {
  FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined;
}
declare var window: Window & typeof globalThis;
