import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarButtonsComponent } from './toolbar-buttons/toolbar-buttons.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ToolbarButtonsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ToolbarButtonsComponent
  ]
})
export class SharedModule { }
