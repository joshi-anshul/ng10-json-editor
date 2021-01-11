import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { JsonEditorModule } from './json-editor.module';

platformBrowserDynamic().bootstrapModule(JsonEditorModule)
  .catch(err => console.error(err));


// export everything in order to be AoT compatible
export * from './json-editor.module';
export * from './shared/interfaces';
export * from './shared/services';
export * from './shared/pipes';
export * from './shared/classes';
