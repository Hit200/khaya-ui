<template>
  <div class="pb-32">
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <div
      v-if="property.objectId"
      class="container mx-auto flex justify-between flex-wrap sm:mt-16 mb-10"
    >
      <!-- Property descrition and details -->
      <div class="w-full sm:w-1/2-almost bg-white sm:rouded">
        <h1 class="text-3xl mb-4">{{ property.location }}</h1>

        <!-- Popularity -->
        <span class="inline-flex items-center mb-4">
          <star-rating
            :star-size="15"
            v-model="property.overallRating"
            text-class="hidden"
            class="mr-2"
          ></star-rating>

          <span class="ml-2">{{ countRaters(property.ratings)}} reviews</span>
        </span>

        <!-- Description -->
        <p class="mb-16">{{ property.description }}</p>

        <!-- Recommenders -->
        <!-- <div class="flex items-center mb-16">
          <div
            class="inline-block flex-no-shrink h-12 w-12 bg-purple border-2 border-white rounded-full overflow-hidden shadow"
            :class="{'-ml-4': i > 1}"
            v-for="i in 4"
            :key="i"
          >
            <img class="w-full h-full" src="/static/sample-avatar.png" alt>
          </div>
          <span class="ml-4">
            Recommended by
            <strong>145</strong> people.
          </span>
        </div>-->
        <!-- Location area for directions -->
        <div class="container mx-auto p-8 sm:p-0">
          <h3 class="text-xl mb-4">Location</h3>
          <!-- Map area -->
          <div
            class="bg-purple-lighter w-full h-48 rounded"
            :style="{'background-image': `url(${generateGoogleMapUrl()})`}"
          ></div>
        </div>
      </div>

      <div class="w-full sm:w-1/2-almost sm:pl-4">
        <!-- Property images -->
        <div
          class="relative w-full h-64 sm:rounded bg-purple-lighter bg-size-cover mb-16"
          :style="{'background-image': `url(${property.media[0]})`}"
        ></div>
        <div class="w-full p-8 sm:p-0">
          <h3 class="mb-4">Highlighted Amenities</h3>
          <div class="flex items-center justify-between flex-wrap">
            <div v-for="i in property.facilities" class="w-1/2 mb-4" :key="i">
              <svg
                class="h-4 text-purple"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
                ></path>
              </svg>
              {{ i }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <!-- The rooms -->
      <div class="container mx-auto mt-6 p-8 sm:p-0">
        <h3 class="text-xl mb-4">Rooms</h3>
        <!-- 
          -picture
          - room number
          - number of people
          - genders allowed
          - price
        -->
        <div class="flex flex-wrap -mx-8">
          <div class="px-8 w-full sm:w-1/3 mb-10" v-for="(room, i) in property.room" :key="i">
            <!-- The Property -->
            <div class="w-full rounded-t mb-6">
              <!-- The image for the Property -->
              <div
                class="single-home- w-full h-64 bg-purple relative"
                :style="{'background-image': 'url(/stlatic/architecture-building-driveway-186077.jpg)', 'background-size': 'cover'}"
              >
                <!-- Do a lil morre research on how to make the imimages scale properly - consider using object-fit -->
                <div class="absolute pin-t flex justify-center -mt-4 w-full">
                  <span
                    class="py-2 px-4 rounded purple-blue-gradient text-white font-bold border-2 border-white"
                  >${{ room.price }}/month</span>
                </div>
                <div class="image-filter text-white w-full absolute pin-b px-4 pb-2 pt-8">
                  <h3>Room {{room.number}}</h3>
                  <div class="mb-2">
                    <span>Boys Only &middot; {{ room.capacity }} people</span>
                  </div>

                  <!-- <div class="flex w-full items-center justify-between mb-2">
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
                      128
                    </span>
                    
                    <span class="inline-flex items-center">
                      <svg
                        v-for="i in 3"
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
                  </div>-->
                </div>
              </div>
            </div>

            <router-link
              class="inline-block w-full no-underline text-purple text-center border border-purple hover:bg-purple hover:text-white py-4 px-6 rounded"
              :to="`/${$route.params.id}/checkout`"
            >Rent this room</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews and Features hide it for now -->
    <div v-if="false" class="container mx-auto flex justify-between flex-wrap mt-16">
      <!-- Reviews -->
      <div class="w-full sm:w-1/2-almost p-8 sm:p-0">
        <h3 class="mb-4">Reviews</h3>

        <div class="flex">
          <div class="h-10 w-10 bg-purple rounded-full flex-no-shrink overflow-hidden mr-2">
            <img class="w-full h-full" src="/static/sample-avatar.png" alt>
          </div>
          <div>
            <div class="flex items-baseline justify-between mb-4 font-medium text-grey-dark">
              <span>Kudakwashe Paradzayi</span>
              <span>4 days ago</span>
            </div>
            <p
              class="mb-4"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error libero obcaecati ipsa eveniet et modi quis assumenda vitae totam praesentium repellat adipisci, esse quidem veniam asperiores quae. Tempora, voluptatum similique?</p>

            <button class="py-2 px-4 border-b-2 border-purple">Read more reviews</button>
          </div>
        </div>
      </div>
    </div>

    <!-- The fixed footer -->
    <footer class="fixed pin-b w-full p-4 bg-white border-t hidden">
      <div class="flex items-center justify-between flex-wrap sm:flex-no-wrap container mx-auto">
        <div class="flex-1 mb-2 sm:mb-4">
          <h3 class="mb-2 sm:mb-4 text-sm sm:text-lg">47 Castens, Belvedere Harare</h3>

          <!-- Popularity -->
          <span class="inline-flex items-center">
            <svg
              v-for="i in 4"
              :key="i"
              fill="currentColor"
              class="h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              ></path>
            </svg>
            <span class="ml-2">200 reviews</span>
          </span>
        </div>

        <div class="inline-flex items-center flex-wrap w-full sm:w-auto">
          <span class="font-medium mr-4 mb-2 sm: mb-0">$80/month</span>
          <router-link
            class="no-underline bg-purple text-white text-center py-4 px-6 rounded w-full sm:w-auto"
            :to="`/${$route.params.id}/checkout`"
          >Rent this place</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppNavigationBar from "@/components/AppNavigationBar";
import StarRating from "vue-star-rating";
import axios from "axios";

export default {
  name: "SingleProperty",

  data: () => ({
    property: {},
    isFetchingProperty: false
  }),

  mounted() {
    this.isFetchingProperty = true;
    axios
      .get(
        `http://khaya-api.herokuapp.com/property/${
          this.$route.params.id
        }/details`
      )
      .then(res => {
        console.log(res.data);
        this.property = res.data.property;
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        this.isFetchingProperty = true;
      });
  },

  components: {
    AppNavigationBar,
    StarRating
  },

  methods: {
    countRaters(ratingsObj) {
      let total = 0;
      Object.keys(ratingsObj).forEach(k => (total += ratingsObj[k]));
      return total;
    },

    generateGoogleMapUrl() {
      return `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyBzPWkMJbQHRutX14O3b_dEG_TZr75V8Sc&&signature=nf6uUZV_lXBdx-lbjBrQYQ9FnQ8=`;
    }
  }
};
</script>

<style>
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
.image-filter {
  background-image: linear-gradient(
    0deg,
    #000000 0%,
    #00000020 85%,
    #0000000f 85%,
    #0000000f 100%
  );
}
</style>
