<template>
  <div class="payment">
    <p>
      We use
      <a href="https://payoneer.com/" target="_blank" rel="noopener noreferrer"
        >Payoneer</a
      >
      for secure payments. We will email you a payment request. Open it, enter your
      email address, and choose how you want to pay.
    </p>
    <ul class="payment-methods">
      <li v-for="method in methods" :key="method.name">
        <iconify-icon :icon="method.icon" />
        <div>
          <div class="method-name">{{ method.name }}</div>
          <div class="method-detail">{{ method.detail }}</div>
        </div>
      </li>
    </ul>
    <div class="payment-note">
      The payment page shows the methods available in your country. If none of them
      works for you,
      <a href="mailto:hey@visnalize.com">email us</a> and we will find another
      way.
    </div>
  </div>
</template>

<script setup lang="ts">
// Based on Payoneer's payer help page, checked September 2026:
// https://payoneer.custhelp.com/app/answers/detail/a_id/17183
// Regions and limits are left out on purpose: that page lists narrower regions
// than the payment page really offers (PayPal shows as US and UK only, but
// works for payers elsewhere).
const methods = [
  {
    icon: "fluent:payment-24-regular",
    name: "Credit or debit card",
    detail: "Visa, Mastercard, American Express",
  },
  {
    icon: "simple-icons:paypal",
    name: "PayPal",
    detail: "Pay from your PayPal account",
  },
  {
    icon: "fluent:building-bank-24-regular",
    name: "Bank transfer",
    detail: "ACH debit, direct bank payment, or local bank transfer",
  },
  {
    icon: "fluent:wallet-24-regular",
    name: "Payoneer balance",
    detail: "If you already have a Payoneer account",
  },
];
</script>

<style scoped>
.payment {
  color: var(--vp-c-text-2);
}

.payment-logo {
  flex-shrink: 0;
  font-size: 2rem;
  color: var(--vp-c-brand-1);
}

.payment-title {
  color: var(--vp-c-text-1);
  font-size: 1.125rem;
  font-weight: 600;
}

.payment-header p {
  margin: 0.25rem 0 0;
  line-height: 1.6;
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}

.payment-methods li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin: 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 0.5rem;
}

.payment-methods iconify-icon {
  flex-shrink: 0;
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
}

.method-name {
  color: var(--vp-c-text-1);
  font-weight: 600;
  line-height: 1.5;
}

.method-detail {
  font-size: 0.875rem;
  line-height: 1.5;
}

.payment-note {
  padding: 0 2rem;
  font-size: 0.875rem;
  line-height: 1.6;
}
</style>
