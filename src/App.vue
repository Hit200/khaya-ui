<template>
  <div id="app" class="text-grey-darkest border-t-2 border-purple text-sm">
    <router-view/>
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
