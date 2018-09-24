<template>
  <div class="pb-24">
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <div class="container mx-auto flex justify-between mt-6 mb-10">
      <!-- Property descrition and details -->
      <div class="w-1/2-almost h-64 bg-white rouded p-8">
        <h3 class="mb-4">47 Castens, Belvedere Harare</h3>

        <!-- Popularity -->
        <span class="inline-flex items-center mb-4">
          <svg v-for="i in 4" :key="i" fill="currentColor" class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          200 reviews
        </span>

        <!-- Description -->
        <p class="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, voluptates maiores iusto ex assumenda aut perferendis consectetur doloremque deleniti earum in blanditiis quas sequi dolorem, asperiores laboriosam eius necessitatibus odit.
        </p>

        <!-- Recommenders -->
        <div class="flex items-center">
          <div class="inline-block h-8 w-8 bg-purple border-2 border-white rounded-full" :class="{'-ml-4': i > 1}" v-for="i in 4" :key="i">&nbsp;</div>
          <span class="ml-4">Recommended by <strong>145</strong> people.</span>
        </div>
      </div>

      <!-- Property images -->
      <div class="relative w-1/2-almost h-64 rounded bg-purple">
        <button class="bg-white rounded py-2 px-4 shadow mt-4 ml-4">
          <span class="inline-flex items-center">
            <svg class="h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>
            12k
          </span>
        </button>

        <div class="flex items-center justify-between px-4 h-24 w-full absolute pin-b -mb-12">
          <button class="inline-flex items-center bg-white rounded py-2 px-4 shadow">
            <svg class="h-4 mr-2" fill="current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            See pictures
          </button>

          <div class="w-24 h-24 flex items-center justify-center bg-grey border-4 border-grey-lightest rounded-full">
            <svg class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews and Features -->
    <div class="container mx-auto flex justify-between mt-6">
      <!-- Reviews -->
      <div class="w-1/2-almost">
        <h3 class="mb-4">Reviews</h3>

        <div class="flex">
          <div class="h-6 w-6 bg-purple rounded-full flex-no-shrink mr-2">&nbsp;</div>
          <div>
            <div class="flex items-baseline justify-between mb-4">
              <span>Kudakwashe Paradzayi</span>
              <span>4 days ago</span>
            </div>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error libero obcaecati ipsa eveniet et modi quis assumenda vitae totam praesentium repellat adipisci, esse quidem veniam asperiores quae. Tempora, voluptatum similique?
            </p>

            <button class="py-2 px-4 border-b-2 border-purple">Read more reviews</button>
          </div>
        </div>
      </div>

      <div class="w-1/2-almost">
        <h3 class="mb-4">Features</h3>
        <div class="flex items-center justify-between flex-wrap">
          <div v-for="i in 6" class="w-1/2 mb-2">
            <svg class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
            Wifi
          </div>
        </div>
      </div>
    </div>


    <!-- The fixed footer -->
    <footer class="fixed pin-b w-full p-4 bg-white border-t">
      <div class="flex items-center justify-between container mx-auto">
        <div>
          <h3 class="mb-4">47 Castens, Belvedere Harare</h3>

          <!-- Popularity -->
          <span class="inline-flex items-center">
            <svg v-for="i in 4" :key="i" fill="currentColor" class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <span class="ml-2">200 reviews</span>
          </span>

        </div>

        <div class="inline-flex items-center">
          <span class="font-medium mr-4">$80/month</span>
          <button class="bg-purple text-white py-4 px-6 rounded">Rent this place</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppNavigationBar from '@/components/AppNavigationBar'

export default {
  name: 'SingleProperty',
  components: {
    AppNavigationBar
  }
}
</script>

<style>

</style>
