import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { RouterModule } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { NameToHexPipeModule } from "../../pipes/name-to-hex.pipe";
import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ExistingTypeValidatorDirective } from "../../directives/existing-type-validator.directive";
import {TagModule} from "primeng/tag";
import {MultiSelectModule} from "primeng/multiselect";


@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleItemComponent,
    ExistingTypeValidatorDirective
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: VehicleListComponent},
      {path: 'item', component: VehicleItemComponent},
      {path: 'item/:id', component: VehicleItemComponent}
    ]),
    CommonModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    NameToHexPipeModule,
    DropdownModule,
    AutoCompleteModule,
    TagModule,
    MultiSelectModule
  ]
})
export class VehicleModule { }
