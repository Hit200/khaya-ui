<template>
  <div class="border-b bg-low-opacity text-grey-darkest">
    <div class="flex items-center justify-between sm:flex-wrap container mx-auto px-4 sm:px-0">
      <div class="w-full lg:w-auto py-4 inline-flex items-center">
        <router-link to="/" class="mr-4 flex-no-shrink">
          <img class="h-8" src="/static/logo-dark.svg">
        </router-link>
        <!-- <div
          class="flex-1 flex items-center py-2 px-4 border border-grey-light bg-grey-lightest hover:bg-white hover:shadow rounded lg:w-80 flex-1"
        >
          <svg
            class="fill-grey-darkest h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            ></path>
          </svg>
          <input
            type="text"
            class="flex-1 outline-none h-full bg-transparent"
            placeholder="Search: eg Belvedere, Harare"
          >
        </div>-->
      </div>

      <nav class="hidden sm:block p-4 lg:p-0">
        <router-link
          to="/homes"
          class="py-6 border-b-2 mr-4 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
          :class="{'border-purple': $route.name === 'PropertiesListing'}"
        >Explore houses</router-link>
        <router-link
          to="/new"
          v-if="$store.state.currentUser.role == 'host'"
          class="py-6 border-b-2 mr-4 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
          :class="{'border-purple': $route.name === 'CreateNewHouse'}"
        >Rent Out Your House</router-link>
        <a
          v-if="!$store.state.currentUser"
          href="#"
          class="py-6 border-b-2 mr-4 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
        >Create Account</a>
        <router-link
          v-if="!$store.state.currentUser"
          to="/login"
          class="no-underline font-medium text-purple py-2 px-4 rounded bg-white shadow"
        >Login</router-link>

        <button
          v-else
          @click="logout()"
          class="no-underline font-medium text-purple py-2 px-4 rounded bg-white shadow"
        >Logout</button>
      </nav>

      <!-- The hamburger menu -->
      <nav class="sm:hidden ml-4">
        <svg class="h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.purple-blue-gradient {
  background-image: linear-gradient(45deg, #46cefc, #203fca);
}

.bg-low-opacity {
  background: #ffffff4d;
}
</style>
