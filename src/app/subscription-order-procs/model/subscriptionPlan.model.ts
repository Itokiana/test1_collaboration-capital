export class SubscriptionPlan  {
  duration?: number;
  priceUsdPerGb: number = 0;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }

  get value() {
    return { duration: null, priceUsdPerGb: null };
  }
}
