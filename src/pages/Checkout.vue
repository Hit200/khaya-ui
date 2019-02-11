<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <div class="container-strip mx-auto mt-6">
      <h3 class="mb-4 px-6">Confirm your order</h3>

      <!-- Property summary -->
      <div class="bg-white p-6 rounded mb-4 border">
        <h3 class="mb-4">47 Castens, Belvedere Harare</h3>

        <!-- Popularity -->
        <span class="inline-flex items-center">
          <svg
            v-for="i in 4"
            :key="i"
            fill="currentColor"
            class="h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            ></path>
          </svg>
          <span class="ml-2">200 reviews</span>
        </span>

        <div class="pt-4 mt-4 border-t">
          <label for class="font-bold mb-2 inline-block">Check In Date</label>
        </div>
        <input type="date" class="py-2 px-4 border rounded">
      </div>

      <!-- Amount payable -->
      <div class="bg-white p-6 rounded mb-4 border">
        <h3 for class="text-xl mb-6">Payment</h3>
        <div class="flex items-baseline justify-between mb-4">
          <span>Accomodation fee</span>
          <span class="font-medium">$80</span>
        </div>

        <div class="flex items-baseline justify-between mb-4">
          <span>Utilities (Wifi, ZESA, etc)</span>
          <span class="font-medium">$5</span>
        </div>

        <hr class="bg-grey h-1 mb-4">

        <div class="flex items-baseline justify-between mb-4">
          <span class="font-bold">Total</span>
          <span class="font-medium">
            $85
            <sup>*</sup>
          </span>
        </div>

        <hr class="bg-grey h-1 mb-4">

        <p class="text-sm mb-4">* Does not include transaction fees from payment providers</p>
      </div>
      <div class="bg-white p-6 rounded mb-4 border">
        <h3 for class="text-xl mb-6">Your Payment Details</h3>

        <div>
          <input
            type="email"
            v-model="authemail"
            class="paynow-form__text-input mb-4"
            placeholder="Enter your email address"
          >
          
          <input
            type="text"
            v-model="mobileNumber"
            class="paynow-form__text-input mb-4"
            placeholder="Phone number (e.g 0772123456)"
          >

          <div class="flex items-center justify-between mb-4">
            <button
              class="py-4 px-2 border flex-1"
              :class="{'ecocash--active':  mobileMoneyProvider === 'ecocash'}"
              @click="mobileMoneyProvider = 'ecocash'"
            >Ecocash</button>
            <button
              class="py-4 px-2 border flex-1"
              :class="{'onemoney--active':  mobileMoneyProvider === 'onemoney'}"
              @click="mobileMoneyProvider = 'onemoney'"
            >Onemoney</button>
            <button
              class="py-4 px-2 border flex-1"
              :class="{'telecash--active':  mobileMoneyProvider === 'telecash'}"
              @click="mobileMoneyProvider = 'telecash'"
            >Telecash</button>
          </div>
          <!-- <input type="checkbox" id="mobile-money-btn"> <label for="mobile-money-btn">Use mobile money (Ecocash. OneMoney)</label> -->
          <div class="paynow-form__mobile-money collapsed">
            <input
              type="text"
              class="paynow-form__text-input"
              placeholder="Enter your phone number"
            >
          </div>
        </div>

        <button
          onclick="alert('At this point the app redirects to paynow')"
          class="block w-full bg-purple text-white p-4 text-center rounded font-medium mb-4"
        >
          <span v-if="isLoading">making payment...</span>
          <span v-else>Pay Now</span>
        </button>
      </div>

      <!-- <div class="bg-white rounded border mb-4">
        <button
          @click="$router.push('/')"
          class="block w-full text-orange hover:bg-orange-lightest p-4 text-center rounded font-medium"
        >Cancel order</button>
      </div>-->
    </div>
  </div>
</template>

<script>
import AppNavigationBar from "@/components/AppNavigationBar";

export default {
  name: "Checkout",
  components: {
    AppNavigationBar
  },

  data: () => ({
    isLoading: false,
    message: "",
    authemail: "",
    mobileMoneyProvider: "ecocash",
    mobileNumber: "",
    amount: 5
  }),
  methods: {
    initiateMobileTransaction() {
      this.isLoading = true;
      axios
        .post("http://localhost:3000/pay/mobile", {
          products: [{ itemName: "donation", price: this.amount }],
          mobileMoneyProvider: this.mobileMoneyProvider,
          mobileNumber: this.mobileNumber,
          authemail: this.authemail
        })
        .then(response => {
          console.log(response);
          this.message = response.data.instructions;
        })
        .catch(error => {
          console.dir(error);
          this.message =
            "An error occured whilst attempting to send money. Please try again.";
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style>
.ecocash--active {
  @apply border-blue bg-blue text-white;
}

.telecash--active {
  @apply border-red text-white bg-red;
}

.onemoney--active {
  @apply border-orange text-white bg-orange;
}
/* Payment methods */
.patreon,
.paynow {
  flex: 1;
}

.paynow-form,
.paynow-form__mobile-money {
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  opacity: 1;
  transition: all 0.5s ease-out;
}

.paynow-form.collapsed,
.paynow-form.collapsed *,
.paynow-form__mobile-money.collapsed,
.paynow-form__mobile-money.collapsed * {
  height: 0;
  padding: 0;
  opacity: 0;
}

.paynow-form__text-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 2px gray solid;
}

.paynow-form__input-label {
  padding: 10px;
  display: block;
  background: rgb(215, 216, 223);
  font-weight: bold;
  border-left: 2px gray solid;
  border-top: 2px gray solid;
  border-bottom: 2px gray solid;
}
.paynow-form__text-input:focus {
  border-color: var(--color-purple);
}
</style>
