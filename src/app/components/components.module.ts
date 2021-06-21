import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarTabComponent } from './guitar-tab/guitar-tab.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { TabComponent } from './tab/tab.component';
import { NoteTabComponent } from './note-tab/note-tab.component';


const COMPONENTS = [
  GuitarTabComponent,
  ButtonTestComponent,
  TabComponent,
  NoteTabComponent
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
