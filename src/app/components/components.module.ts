import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarTabComponent } from './guitar-tab/guitar-tab.component';
import { ButtonTestComponent } from './button-test/button-test.component';

const COMPONENTS = [
  GuitarTabComponent,
  ButtonTestComponent
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
