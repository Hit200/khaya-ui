<template>
  <div>
    <h1 class="text-center mt-10 mb-4">Khaya App</h1>

    <pre>
      {{$data}}
    </pre>

    <div class="container-strip mx-auto bg-white border p-6 rounded mb-4">
      <h3 class="mb-4">Create your Account</h3>

      <div class="flex items-center justify-between my-6">
        <div class="bg-grey-light h-1 w-6 rounded-full"></div>
        <span class="mx-2">Select the account you want</span>
        <div class="bg-grey-light h-1 flex-1 rounded-full"></div>
      </div>

      <div class="flex items-center justify-between flex-wrap mb-8">
        <button
          class="w-full outline-0 sm:w-1/2-almost mb-4 sm:mb-0 bg-white py-2 px-4 text-center rounded font-medium border"
          :class="studentButtonClass"
          @click="role = 'student'"
        >
          Student
          <span
            v-if="role == 'student'"
            class="ml-2 inline-block h-5 w-5 rounded-full border border-purple"
          >&check;</span>
        </button>

        <button
          class="w-full outline-0 sm:w-1/2-almost mb-4 sm:mb-0 bg-white py-2 px-4 text-center rounded font-medium border"
          :class="homeOwnerButtonClass"
          @click="role = 'host'"
        >
          Home Owner
          <span
            v-if="role == 'host'"
            class="ml-2 inline-block h-5 w-5 rounded-full border border-purple"
          >&check;</span>
        </button>
      </div>

      <form @submit.prevent="signIn">
        <div>
          <label class="mb-2 block bold">Full Name</label>
          <input
            v-model="fullname"
            type="text"
            class="block w-full py-2 px-4 bg-white border rounded mb-4"
          >
        </div>

        <div>
          <label class="mb-2 block bold">Email address</label>
          <input
            v-model="email"
            type="text"
            class="block w-full py-2 px-4 bg-white border rounded mb-4"
          >
        </div>

        <div>
          <label class="mb-2 block bold">Username</label>
          <input
            v-model="username"
            type="text"
            class="block w-full py-2 px-4 bg-white border rounded mb-4"
          >
        </div>

        <label class="mb-2 block bold">Password</label>
        <input
          v-model="password"
          type="password"
          class="block w-full py-2 px-4 bg-white border rounded mb-4"
        >

        <!-- The alert box that will show if there are any errors during login -->
        <div
          v-if="errorMessage"
          class="flex items-center justify-center mb-4 p-2 bg-orange-lighter border-l-2 border-orange"
        >{{ errorMessage}}</div>

        <button
          type="submit"
          class="block w-full bg-purple text-white p-4 text-center rounded-lg font-medium"
        >{{ isLoading ? 'Hold on, creating your account...' : 'Create your account' }}</button>
      </form>
    </div>

    <div
      class="container-strip flex justify-between items-baseline mx-auto bg-white border p-6 rounded"
    >
      Already a Khayan?
      <router-link
        class="py-2 px-6 rounded bg-purple-lightest text-purple-dark font-bold no-underline hover:bg-purple-lighter"
        to="/login"
      >Login</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      role: "student",
      fullname: "",
      email: "",
      username: "",
      password: "",
      isLoading: false,
      errorMessage: ""
    };
  },

  methods: {
    ...mapActions(["registerAccount"]),
    signIn() {
      this.isLoading = true;
      this.errorMessage = "";
      const { username, password, role, email, fullname } = this.$data;
      this.registerAccount({ username, password, role, email, fullname })
        .then(({ username = "" }) => {
          this.$router.push({ path: "/login", query: { username } });
        })
        .catch(err => {
          this.errorMessage = err.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },

  computed: {
    studentButtonClass() {
      return {
        "border-purple": this.role == "student",
        "text-purple": this.role == "student",
        "shadow-none": this.role == "student"
      };
    },

    homeOwnerButtonClass() {
      return {
        "border-purple": this.role == "host",
        "text-purple": this.role == "host",
        "shadow-none": this.role == "host"
      };
    }
  }
};
</script>

<style scoped>
</style>
