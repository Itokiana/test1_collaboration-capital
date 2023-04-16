import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-order-proc',
  templateUrl: './subscription-order-proc.component.html',
  styleUrls: ['./subscription-order-proc.component.scss']
})
export class SubscriptionOrderProcComponent implements OnInit {
  current = 0;
  index = 1;
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      duration: ['12', [Validators.required]],
      amountGigabytes: ['5', [Validators.required]],
      upfrontPayment: [false],
      cardNumber: [null, [Validators.required, this.validateCardNumberLength, this.onlyNumbersValidator]],
      cardExp: [null, [Validators.required]],
      cardSec: [null, [Validators.required, this.validateCardSecLength, this.onlyNumbersValidator]],
      email: [null, [Validators.required]],
      terms: [null, [Validators.required]],
    });
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        break;
      }
      case 2: {
        this.index = 3;
        break;
      }
      default: {
        this.index = 1;
      }
    }
  }

  validateCardNumberLength(control: AbstractControl): { invalidLength: boolean } | null {
    if (control.value && control.value.length !== 16) {
      return { invalidLength: true };
    }
    return null;
  }
  onlyNumbersValidator(control: AbstractControl): { containsNonNumeric: boolean } | null {
    const inputValue = control.value;
    const containsOnlyNumbers = /^\d+$/.test(inputValue);
    return containsOnlyNumbers ? null : { containsNonNumeric: true };
  }

  validateCardSecLength(control: AbstractControl): { invalidLength: boolean } | null {
    if (control.value && control.value.length !== 3) {
      return { invalidLength: true };
    }
    return null;
  }

  test() {
    console.log(this.validateForm.get('terms'))
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
}
