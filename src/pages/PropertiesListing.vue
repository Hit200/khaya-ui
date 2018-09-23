<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <!-- Secondary Navigation Bar, with filters -->
    <div class="flex items-center justify-between container mx-auto border-b">
      <div class="py-2">
        <input type="checkbox" name="" id="">
        <span>Show Map</span>
      </div>

      <div class="inline-flex items-center py-2">
        <span class="mr-4 inline-flex items-center font-bold">
          <svg class="h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"/></svg>
          Filters
        </span>
        <button class="py-2 px-4 rounded border hover:bg-grey-lightest mr-2">Distance from HIT</button>
        <button class="py-2 px-4 rounded border hover:bg-grey-lightest mr-2">Price</button>
        <button class="py-2 px-4 rounded border hover:bg-grey-lightest">Number of occupants</button>
      </div>
    </div>

    <h1>Hit 200 Here we come</h1>
  </div>
</template>

<script>
import AppNavigationBar from '@/components/AppNavigationBar'
export default {
  name: 'HelloWorld',
  components: {
    AppNavigationBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
