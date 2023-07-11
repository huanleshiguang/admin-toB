import type { App } from 'vue';
import { useTable } from './VxeTable';

export function registerGlobComp(app: App) {
  app.use(useTable);
}
