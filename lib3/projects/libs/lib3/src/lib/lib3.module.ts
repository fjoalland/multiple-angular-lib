import { NgModule } from '@angular/core';
import { Lib3Component } from './lib3.component';

import {Lib1Module} from '@libs/lib1';

@NgModule({
  declarations: [Lib3Component],
  imports: [
    Lib1Module
  ],
  exports: [Lib3Component]
})
export class Lib3Module { }
