<template>
  <div>
    <h1 class="text-center mt-16 mb-4">Khaya App</h1>

    <div class="container-strip mx-auto bg-white border p-6 rounded mb-4">
      <h3 class="mb-4">Login</h3>

      <div class="flex items-center justify-between flex-wrap mb-4">
        <button
          class="w-full sm:w-1/2-almost mb-4 sm:mb-0 bg-white text-red py-2 px-4 text-center rounded font-medium border"
        >Login with Google</button>
      </div>

      <div class="flex items-center justify-between my-6">
        <div class="bg-grey-light h-1 flex-1 rounded-full"></div>
        <span class="mx-2">OR</span>
        <div class="bg-grey-light h-1 flex-1 rounded-full"></div>
      </div>

      <form @submit.prevent="signIn">
        <input
          v-model="username"
          type="text"
          class="block w-full py-2 px-4 bg-white border rounded mb-4"
          placeholder="Email Address"
        >
        <input
          v-model="password"
          type="password"
          class="block w-full py-2 px-4 bg-white border rounded mb-4"
          placeholder="Password"
        >

        <!-- The alert box that will show if there are any errors during login -->
        <div
          v-if="errorMessage"
          class="flex items-center justify-center mb-4 p-2 bg-orange-lighter border-l-2 border-orange"
        >{{ errorMessage}}</div>

        <button
          type="submit"
          class="block w-full bg-purple text-white p-4 text-center rounded font-medium"
        >{{ isLoading ? 'Logging in...' : 'Login' }}</button>
      </form>
    </div>

    <div
      class="container-strip flex justify-between items-baseline mx-auto bg-white border p-6 rounded"
    >
      New to Khaya?
      <router-link
        class="py-2 px-6 rounded bg-purple-lightest text-purple-dark font-bold no-underline hover:bg-purple-lighter"
        to="/register"
      >Create an account</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.username = this.$route.query.username;

    if (this.$route.query.host_account_required == "1") {
      this.errorMessage =
        "You need to be logged in as a home owner in order to add a house";
    }
  },
  data() {
    return {
      username: "",
      password: "",
      isLoading: false,
      errorMessage: ""
    };
  },

  methods: {
    ...mapActions(["login"]),
    signIn() {
      this.isLoading = true;
      this.errorMessage = "";
      const { username, password } = this.$data;
      this.login({ username, password })
        .then(() => {
          this.$router.push(this.$route.query.return_to || "/homes");
        })
        .catch(err => {
          this.errorMessage = err.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
