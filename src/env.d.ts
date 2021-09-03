/// <reference types="vite/client" />

declare module '*.vue' {
  import { Component, AsyncComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: string | Component<any, any, any, any> | AsyncComponent<any, any, any, any> | (() => Component)
  export default component
}
