import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static nospace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {nospace: true};
    }
    return null;
  }
}
