<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <!-- Secondary Navigation Bar, with filters -->
    <div class="border-b">
      <div class="flex items-center justify-between flex-col md:flex-row container mx-auto">
        <div class="py-2">
          <AppToggle v-model="isShowingMap" onText="Hide Map" offText="Show Map"/>
        </div>

        <div class="inline-flex items-center flex-col md:flex-row py-2 w-full md:w-auto">
          <span class="mb-2 md:mb-0 mr-4 inline-flex items-center font-bold">
            <svg class="h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"/></svg>
            Filters
          </span>
          <button class="w-4/5 md:w-auto mb-2 md:mb-0 py-2 px-4 bg-white rounded border hover:bg-grey-lighter md:mr-2">Distance from HIT</button>
          <button class="w-4/5 md:w-auto mb-2 md:mb-0 py-2 px-4 bg-white rounded border hover:bg-grey-lighter md:mr-2">Price</button>
          <button class="w-4/5 md:w-auto mb-2 md:mb-0 py-2 px-4 bg-white rounded border hover:bg-grey-lighter">Number of occupants</button>
        </div>
      </div>
    </div>

    <!-- The properties list -->
    <AppMap :show="isShowingMap"/>

    <div class="flex flex-wrap container mx-auto mt-6">
      <!-- The Property wrapper -->
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-4" v-for="i in 10" :key="i">
        <!-- The Property -->
        <div class="w-full rounded-t overflow-hidden">
          <!-- The image for the Property -->
          <div class="w-full h-32 bg-purple overflow-hidden">
            <img class="w-full" src="/static/sample-house.jpeg" alt="">
            <!-- Do a lil morre research on how to make the imimages scale properly - consider using object-fit -->
          </div>

          <!-- The profile pic and the price -->
          <div class="flex justify-between -mt-8">
            <div class="w-16 h-16 flex items-center justify-center bg-grey border-4 border-grey-lighter rounded-full overflow-hidden ml-4">
              <img class="w-full h-full" src="/static/sample-avatar.png" alt="">
            </div>
            <span class="self-end mb-1 font-medium">$80/month</span>
          </div>
          
          <!-- The description items -->
          <div class="mt-2">
            <router-link :to="`/${i}`" class="no-underline text-current-color hover:text-black text-lg mb-2 font-bold">47 Castens, Belveder, Harare</router-link>
            <div class="mb-2">
              <span>Shared Room - 3 Beds</span>
            </div>

            <div class="flex w-full items-center justify-between mb-2">
              <span class="inline-flex items-center">
                <svg class="h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>
                12k
              </span>

              <span class="inline-flex items-center">
                <svg v-for="i in 4" :key="i" fill="currentColor" class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import AppNavigationBar from '@/components/AppNavigationBar'
import AppToggle from '@/components/AppToggle'
import AppMap from '@/components/AppMap'
export default {
  name: 'HelloWorld',
  components: {
    AppNavigationBar,
    AppToggle,
    AppMap
  },
  data () {
    return {
      isShowingMap: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
