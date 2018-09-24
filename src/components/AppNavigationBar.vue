<template>
  <div class="border-b bg-white">
    <div class="flex items-center justify-between container mx-auto">
      <div class="py-2 inline-flex items-center">
        <div class="h-8 w-8 bg-grey rounded-full mr-4">&nbsp;</div>
        <input type="text" class="py-2 px-4 border-2 border-grey-light rounded w-64" placeholder="Search: eg Belvedere, Harare">
      </div>

      <nav class="py-2">
        <router-link to="/" class="no-underline font-medium text-grey-darkest mr-4">Explore houses</router-link>
        <a href="#" class="no-underline font-medium text-grey-darkest mr-4">Rent Out Your House</a>
        <a href="#" class="no-underline font-medium text-grey-darkest mr-4">Create Account</a>
        <router-link to="/login" class="no-underline font-medium text-white py-2 px-4 rounded bg-purple">Login</router-link>
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
