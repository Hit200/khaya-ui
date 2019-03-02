<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <!-- Secondary Navigation Bar, with filters -->
    <div class="border-b p-4">
      <div class="flex items-center justify-between flex-col md:flex-row container mx-auto">
        <div class="py-2">
          <AppToggle v-model="isShowingMap" onText="Hide Map" offText="Show Map"/>
        </div>

        <div class="inline-flex items-center flex-col md:flex-row py-2 w-full md:w-auto">
          <span class="mb-2 md:mb-0 mr-4 inline-flex items-center font-bold">
            <svg
              class="h-4 mr-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"></path>
            </svg>
            Filters
          </span>
          <button
            class="flex justify-between border-purple w-4/5 md:w-64 mb-2 md:mb-0 py-2 pt-4 px-4 bg-whitel rounded border hover:bg-grey-lighter md:mr-2 relative"
          >
            <span
              class="text-sm pin-t -mt-2 absolute rounded-full px-4 border-b border-purple bg-grey-lighter"
            >Distance from campus</span>
            <span class="text-purple">798 meters</span>
            <span>X</span>
          </button>
          <button
            class="w-4/5 md:w-64 mb-2 md:mb-0 py-2 px-4 bg-white rounded border hover:bg-grey-lighter md:mr-2"
          >Price</button>
          <button
            class="w-4/5 md:w-64 mb-2 md:mb-0 py-2 px-4 bg-white rounded border hover:bg-grey-lighter"
          >Number of occupants</button>
        </div>
      </div>
    </div>

    <!-- The properties list -->
    <AppMap :show="isShowingMap"/>

    <div class="container mx-auto mt-16">
      <!-- Negativley offset the x margin to compensate for the x padding of children -->
      <div class="-mx-6 flex flex-wrap">
        <!-- The Property wrapper -->
        <router-link
          :to="`/${i}`"
          class="no-underline text-current-color w-full sm:w-1/2 md:w-1/3 p-2 px-6 mb-8"
          v-for="i in 10"
          :key="i"
        >
          <!-- The Property -->
          <div class="w-full rounded-t">
            <!-- The image for the Property -->
            <div
              class="single-home w-full h-64 bg-purple relative"
              :style="{'background-image': 'url(/static/architecture-building-driveway-186077.jpg)', 'background-size': 'cover'}"
            >
              <!-- Do a lil morre research on how to make the imimages scale properly - consider using object-fit -->
              <div class="absolute pin-t flex justify-center -mt-4 w-full">
                <span
                  class="py-2 px-4 rounded purple-blue-gradient text-white font-bold border-2 border-white"
                >$80 - $120/month</span>
              </div>
              <div class="image-filter text-white w-full absolute pin-b px-4 pb-2 pt-8">
                <h3>47 Castens, Belveder, Harare</h3>
                <div class="mb-2">
                  <span>Shared &middot; 9 rooms</span>
                </div>

                <div class="flex w-full items-center justify-between mb-2">
                  <span class="inline-flex items-center">
                    <svg
                      class="fill-orange h-4 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
                      ></path>
                    </svg>
                    12k
                  </span>
                  
                  <span class="inline-flex items-center">
                    <svg
                      v-for="i in 4"
                      :key="i"
                      fill="orange"
                      class="h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <!-- The profile pic and the price 
            <div class="flex justify-between -mt-12">
              <div
                class="w-24 h-24 flex items-center justify-center bg-grey border-4 border-white rounded-full overflow-hidden ml-4"
              >
                <img class="w-full h-full" src="/static/sample-avatar.png" alt>
              </div>
            </div>
            -->
            <!-- The description items -->
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavigationBar from "@/components/AppNavigationBar";
import AppToggle from "@/components/AppToggle";
import AppMap from "@/components/AppMap";
export default {
  name: "HelloWorld",
  components: {
    AppNavigationBar,
    AppToggle,
    AppMap
  },
  data() {
    return {
      isShowingMap: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-filter {
  background-image: linear-gradient(
    0deg,
    #000000 0%,
    #00000020 85%,
    #0000000f 85%,
    #0000000f 100%
  );
}
.purple-blue-gradient {
  background-image: linear-gradient(45deg, #46cefc, #203fca);
}

.single-home {
  transition: all 0.2s;
}
.single-home:hover {
  cursor: pointer;
  transform: scale(1.05);
}

a {
  outline: 0;
}
</style>
