<template>
  <div class="border-b bg-white">
    <div class="flex items-center justify-between sm:flex-wrap container mx-auto px-4 sm:px-0">
      <div class="w-full lg:w-auto py-2 inline-flex items-center">
        <div class="h-8 w-8 bg-grey rounded-full mr-4 flex-no-shrink">&nbsp;</div>
        <div class="flex items-center py-2 px-4 border-2 border-grey-light rounded lg:w-64 flex-1 rounded-full">
          <svg class="h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
          <input type="text" class="flex-1 outline-none h-full" placeholder="Search: eg Belvedere, Harare">
        </div>
      </div>

      <nav class="hidden sm:block p-4 lg:p-0">
        <router-link
          to="/"
          class="py-4 border-b-2 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
          :class="{'border-purple': $route.name === 'PropertiesListing'}">
          Explore houses
        </router-link>
        <router-link
          to="/new"
          class="py-4 border-b-2 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
          :class="{'border-purple': $route.name === 'CreateNewHouse'}"
          >
          Rent Out Your House
        </router-link>
        <a href="#" class="py-4 border-b-2 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4">Create Account</a>
        <router-link to="/login" class="no-underline font-medium text-white py-2 px-4 rounded bg-purple">Login</router-link>
      </nav>

      <!-- The hamburger menu -->
      <nav class="sm:hidden ml-4">
        <svg class="h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
