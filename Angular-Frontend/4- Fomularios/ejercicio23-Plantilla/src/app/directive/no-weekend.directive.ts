import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNoWeekend]',
  providers: [{
    provide : NG_VALIDATORS,
    useExisting: NoWeekendDirective,
    multi: true
  }]
})
export class NoWeekendDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let n = new Date(control.value).getDay();
    if(n == 6) {
      return {isSaturday : true}
    } else if (n == 0) {
      return {isSunday : true};
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
  }

}
