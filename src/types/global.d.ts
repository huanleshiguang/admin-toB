import type { ComponentRenderProxy, VNode } from "vue";

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };
  // declare interface Window {
  //   // Global vue app instance
  //   __APP__: App<Element>;
  // }

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  declare interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }

  declare interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
  }

  declare type PromiseCallbackFn = (params: Iobj) => Promise<any>;

  declare interface Iobj<T = any> {
    [key: string]: T;
    [key: number]: T;
  }

  declare type RefType<T> = T | null;

  declare type CustomizedHTMLElement<T> = HTMLElement & T;

  declare type ReadonlyRecordable<T extends any = any> = {
    readonly [key: string]: T;
  };

  declare type Hash<T> = Indexable<T>;

  declare type LabelValueOptions = {
    label: string;
    value: any;
  }[];

  declare type EmitType = (event: string, ...args: any[]) => void;

  declare type TargetContext = "_self" | "_blank";

  declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
    $el: T;
  }

  declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

  declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

  type IsSame<A, B> = A | B extends A & B ? true : false;

  declare type Nullable<T> = T | null;
  declare type NonNullable<T> = T extends null | undefined ? never : T;
  declare type Recordable<T = any> = Record<string, T>;
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  declare type Indexable<T = any> = {
    [key: string]: T;
  };
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type IntervalHandle = ReturnType<typeof setInterval>;

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  declare interface WheelEvent {
    path?: EventTarget[];
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_USE_PWA: boolean;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: string;
    VITE_GLOB_APP_TITLE: string;
    VITE_GLOB_APP_SHORT_NAME: string;
    VITE_USE_CDN: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_GENERATE_UI: string;
  }

  declare function parseInt(s: string | number, radix?: number): number;

  declare function parseFloat(string: string | number): number;

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>;
}
