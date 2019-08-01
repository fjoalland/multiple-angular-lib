import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';

import {Lib1Module} from '@libs/lib1';

@NgModule({
  declarations: [Lib2Component],
  imports: [
    Lib1Module
  ],
  exports: [Lib2Component]
})
export class Lib2Module { }
