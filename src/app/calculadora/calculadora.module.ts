import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { calculatorComponent } from './components';
import { calculatorService } from './services';

@NgModule({
  declarations: [
    calculatorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    calculatorComponent,
  ],
  providers: [
    calculatorService,
  ]
})
export class CalculadoraModule { }
