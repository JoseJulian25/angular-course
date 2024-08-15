import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card'
import { FieldsetModule} from 'primeng/fieldset'
import {PanelModule} from 'primeng/panel'
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule
  ]
})
export class PrimeNgModule { }
