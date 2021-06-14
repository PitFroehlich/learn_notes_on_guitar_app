import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarTabComponent } from './guitar-tab/guitar-tab.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { TabComponent } from './tab/tab.component';

const COMPONENTS = [
  GuitarTabComponent,
  ButtonTestComponent,
  TabComponent
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
