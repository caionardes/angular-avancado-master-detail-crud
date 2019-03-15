import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `<p *ngIf="hasErrorMessage()" class="text-danger">{{errorMessage}}</p>`,
  styleUrls: ['./form-field-error.component.css']
  })
  export class FormFieldErrorComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public hasErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  public get errorMessage(): string {
    if (this.formControl.errors.required) {
      return 'Informação obrigatória!';
    } else if (this.formControl.errors.minlength) {
      return `Deve ter mo mínimo ${this.formControl.errors.minlength.requiredLength} caracteres!`;
    } else if (this.formControl.errors.min) {
      return `Valor deve ser maior ou igual a ${JSON.stringify(this.formControl.errors.min.min)}!`;
    } else {
      return null;
    }
  }
}
