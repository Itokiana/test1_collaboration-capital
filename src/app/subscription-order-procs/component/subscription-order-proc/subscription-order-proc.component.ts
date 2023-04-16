import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SubscriptionPlan } from '../../model/subscriptionPlan.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-subscription-order-proc',
  templateUrl: './subscription-order-proc.component.html',
  styleUrls: ['./subscription-order-proc.component.scss']
})
export class SubscriptionOrderProcComponent implements OnInit {
  current: number = 0;
  index: number = 1;
  selectedDuration: number = 12;
  selectedGb: number = 5;
  total: number = 0;
  subscriptionPlans: SubscriptionPlan[] = [
    new SubscriptionPlan({ duration: 3, priceUsdPerGb: 3 }),
    new SubscriptionPlan({ duration: 6, priceUsdPerGb: 2.5 }),
    new SubscriptionPlan({ duration: 12, priceUsdPerGb: 2 }),
  ]
  selectedPlan?: SubscriptionPlan = this.subscriptionPlans[2];
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    this.total = this.selectedPlan ? this.selectedPlan.priceUsdPerGb * this.selectedGb : 0;
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

  changePlan() {
    this.selectedDuration = this.validateForm.get('duration') ? parseInt(this.validateForm.get('duration')?.value) : this.selectedDuration;
    this.selectedGb = this.validateForm.get('amountGigabytes') ? parseInt(this.validateForm.get('amountGigabytes')?.value) : this.selectedGb;
    this.selectedPlan = this.subscriptionPlans.find( sp => sp.duration === this.selectedDuration);
    this.total = this.selectedPlan ? this.selectedPlan.priceUsdPerGb * this.selectedGb : 0;
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.message.create('success', `Successfully Purchased Cloud`);
  }
}
