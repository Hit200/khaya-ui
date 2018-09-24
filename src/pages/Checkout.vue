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
          <svg v-for="i in 4" :key="i" fill="currentColor" class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          <span class="ml-2">200 reviews</span>
        </span>
      </div>

      <!-- Amount payable -->
      <div class="bg-white p-6 rounded mb-4 border">
        <div class="flex items-baseline justify-between mb-4">
          <span>Accomodation fee</span>
          <span class="font-medium">$80</span>
        </div>

        <div class="flex items-baseline justify-between mb-4">
          <span>Finder's fee</span>
          <span class="font-medium">$5</span>
        </div>

        <hr class="bg-grey h-1 mb-4">

        <div class="flex items-baseline justify-between mb-4">
          <span class="font-bold">Total</span>
          <span class="font-medium">$85 <sup>*</sup></span>
        </div>

        <p class="text-sm mb-4">* Does not include transaction fees from payment providers</p>

        <button onclick="alert('At this point the app redirects to paynow')" class="block w-full bg-purple text-white p-4 text-center rounded font-medium">Proceed to Paynow</button>
      </div>

      <div class="bg-white rounded border">
        <button @click="$router.push('/')" class="block w-full text-orange hover:bg-orange-lightest p-4 text-center rounded font-medium">Cancel order</button>
      </div>      
    </div>
  </div>
</template>

<script>
import AppNavigationBar from '@/components/AppNavigationBar'

export default {
  name: 'Checkout',
  components: {
    AppNavigationBar
  }
}
</script>

<style>

</style>
