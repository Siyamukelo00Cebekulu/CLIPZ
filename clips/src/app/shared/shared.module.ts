import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabContainerComponent } from './tab-container/tab-container.component';

@NgModule({
  declarations: [
    ModalComponent,
    TabComponent,
    TabContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    ModalComponent,
    TabContainerComponent,
    TabComponent
  ],
  
})
export class SharedModule { }
