<template>
  <div>
    <h1 class="text-center mt-16 mb-4">Khaya App</h1>

    <div class="container-strip mx-auto bg-white border p-6 rounded mb-4 ">
      <h3 class="mb-4">Login</h3>

      <div class="flex items-center justify-between flex-wrap mb-4">
        <button class="w-full sm:w-1/2-almost mb-4 sm:mb-0 bg-red text-white py-2 px-4 text-center rounded font-medium">Login with Google</button>
        <button class="w-full sm:w-1/2-almost bg-blue text-white py-2 px-4 text-center rounded font-medium">Login with Facebook</button>
      </div>

      <div class="flex items-center justify-between my-6">
        <div class="bg-grey-light h-1 flex-1 rounded-full"></div>
          <span class="mx-2"> OR </span>
        <div class="bg-grey-light h-1 flex-1 rounded-full"></div>
      </div>

      <div>
        <input type="text" class="block w-full py-2 px-4 bg-white border rounded mb-4" placeholder="Email Address">
        <input type="password" class="block w-full py-2 px-4 bg-white border rounded mb-4" placeholder="Password">
        <button @click="$router.push('/')" class="block w-full bg-purple text-white p-4 text-center rounded font-medium">Login</button>
      </div>
    </div>

    <div class="container-strip mx-auto bg-white border p-6 rounded ">
      New to Khaya? <a href="#">Create an account</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
