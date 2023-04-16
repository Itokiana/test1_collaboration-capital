import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

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
      upfrontPayment: [false]
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

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
}