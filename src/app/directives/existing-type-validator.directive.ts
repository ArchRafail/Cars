import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {vehicleTypes} from "../constants/vehicleTypes";

@Directive({
  selector: '[appExistingTypeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ExistingTypeValidatorDirective, multi: true}],
})
export class ExistingTypeValidatorDirective implements Validator{

  @Input('appExistingTypeValidator')
  type: string | undefined;
  types = vehicleTypes;

  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.type ? vehicleTypesValidator(this.types)(control) : null;
  }
}

export function vehicleTypesValidator(types: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const notExist = !types.includes(control.value);
    return notExist ? {type: {value: control.value}} : null;
  };
}
