<template>
  <div id="app" class="text-grey-darkest border-t-2 border-purple text-sm">
    <router-view/>
    <section
      class="container mt-10 mx-auto py-4 border-t flex flex-wrap items-center justify-between font-bold"
    >
      <router-link to="/">
        <img src="/static/logo-dark.svg" class="h-10 mb-2 sm:mb-0" alt>
      </router-link>
      &copy; {{ (new Date()).getFullYear() }} Khaya Plc
      <div>
        <svg
          class="fill-current h-6 w-6 mr-2 mb-2 sm:mb-0"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Twitter icon</title>
          <path
            d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
          ></path>
        </svg>

        <svg
          class="fill-current h-6 w-6 mb-2 sm:mb-0"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Facebook icon</title>
          <path
            d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
          ></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/app.css";
#app {
  font-family: montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Fix the background color not filling the whole screen */
  min-height: 100vh;
}
</style>
