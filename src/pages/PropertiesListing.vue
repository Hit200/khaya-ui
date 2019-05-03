<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <!-- Secondary Navigation Bar, with filters -->
    <!-- <div class="border-b p-4">
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
    </div>-->
    <!-- The properties list -->
    <AppMap :show="isShowingMap"/>

    <div class="container mx-auto mt-6">
      <ais-instant-search :searchClient="searchClient" index-name="Properties">
        <ais-search-box
          placeholder="15 Skymaster Belvedere"
          class="mb-8"
          submit-title="search"
          reset-title="clear"
          autofocus
          show-loading-indicator
        ></ais-search-box>

        <!-- filters -->
        <!-- <ais-range-input attribute="minPrice" :min="70" :max="300" :precision="2">
          <div slot-scope="{ currentRefinement, range, refine }">
            <div class="px-4 pb-6 pt-4 my-4 border rounded">
              <div class="w-2/3">
                <span class="ml-2">Price range ($)</span>
                <vue-slider
                  from-placeholder="from"
                  to-placeholder="to"
                  :min="range.min"
                  :max="range.max"
                  :value="toValue(currentRefinement, range)"
                  @input="refine({ min: $event[0], max: $event[1] })"
                />
              </div>
            </div>
          </div>
        </ais-range-input>-->
        <!-- Hits - Search results -->
        <ais-hits :transform-items="transformItems">
          <!-- Negativley offset the x margin to compensate for the x padding of children -->
          <div slot-scope="{ items }" class="-mx-6 flex flex-wrap">
            <!-- The Property wrapper -->
            <!-- The Property -->
            <div
              v-for="(property, i) in items"
              :key="i"
              class="w-full sm:w-1/2 md:w-1/3 p-2 px-6 mb-8"
            >
              <router-link
                :to="`/${property.objectId}`"
                class="no-underline text-current-color w-full"
              >
                <div class="w-full rounded-t">
                  <!-- The image for the Property -->
                  <div
                    class="single-home w-full h-64 bg-purple relative"
                    :style="{'background-image': `url(${property.media ? property.media[0]: '/static/architecture-building-driveway-186077.jpg'})`, 'background-size': 'cover'}"
                  >
                    <!-- Do a lil morre research on how to make the imimages scale properly - consider using object-fit -->
                    <div class="absolute pin-t flex justify-center -mt-4 w-full">
                      <span
                        class="py-2 px-4 rounded purple-blue-gradient text-white font-bold border-2 border-white"
                      >${{property.minPrice}} - ${{property.maxPrice}}/month</span>
                    </div>
                    <div class="image-filter text-white w-full absolute pin-b px-4 pb-2 pt-8">
                      <h3>{{property.location}}</h3>
                      <div class="mb-2">
                        <span>Shared &middot; 9 rooms</span>
                      </div>

                      <div class="flex w-full items-center justify-between mb-2">
                        <span class="inline-flex items-center">
                          <star-rating
                            :star-size="15"
                            v-model="property.overallRating"
                            text-class="hidden"
                            class="mr-2"
                          ></star-rating>
                          ({{ countRaters(property.ratings)}})
                        </span>
                        
                        <span class="inline-flex items-center">
                          <svg
                            viewBox="0 0 496 496.01461"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2"
                            :class="{'fill-grey': !property.verified, 'fill-blue': property.verified}"
                          >
                            <path
                              d="m455.882812 128.003906-60.800781-27.046875-27.070312-60.824219-66.167969 6.910157-53.832031-39.039063-53.863281 39.039063-66.136719-6.910157-27.050781 60.796876-60.824219 27.074218 6.914062 66.167969-39.039062 53.832031 39.039062 53.863282-6.914062 66.136718 60.800781 27.046875 27.074219 60.824219 66.167969-6.910156 53.832031 39.039062 53.863281-39.039062 66.136719 6.910156 27.046875-60.800781 60.824218-27.070313-6.914062-66.167968 39.042969-53.832032-39.042969-53.863281zm-255.871093 216-67.921875-67.921875 22.640625-22.558593 45.28125 45.199218 135.757812-135.757812 22.640625 22.636718zm0 0"
                            ></path>
                            <g fill="#1e81ce">
                              <path
                                d="m494.492188 243.308594-37.25-51.386719 6.601562-63.109375c.359375-3.449219-1.539062-6.734375-4.707031-8.144531l-57.980469-25.800781-25.800781-57.984376c-1.417969-3.160156-4.699219-5.054687-8.144531-4.710937l-63.121094 6.597656-51.382813-37.246093c-2.800781-2.03125-6.589843-2.03125-9.390625 0l-51.386718 37.246093-63.117188-6.597656c-3.441406-.328125-6.710938 1.5625-8.144531 4.703125l-25.800781 57.984375-57.984376 25.808594c-3.164062 1.40625-5.0625 4.691406-4.703124 8.136719l6.597656 63.117187-37.246094 51.386719c-2.03125 2.800781-2.03125 6.589844 0 9.390625l37.246094 51.382812-6.597656 63.121094c-.363282 3.445313 1.535156 6.734375 4.703124 8.144531l57.984376 25.800782 25.800781 57.984374c1.425781 3.148438 4.699219 5.042969 8.144531 4.710938l63.117188-6.601562 51.386718 37.25c2.800782 2.03125 6.589844 2.03125 9.390625 0l51.382813-37.25 63.121094 6.601562c3.445312.347656 6.722656-1.546875 8.144531-4.703125l25.800781-57.984375 57.980469-25.808594c3.164062-1.410156 5.0625-4.691406 4.707031-8.136718l-6.601562-63.121094 37.25-51.382813c2.035156-2.800781 2.035156-6.597656 0-9.398437zm-52 53.863281c-1.160157 1.597656-1.6875 3.566406-1.480469 5.527344l6.304687 60.382812-55.480468 24.699219c-1.8125.796875-3.265626 2.242188-4.066407 4.054688l-24.679687 55.480468-60.398438-6.3125c-1.960937-.203125-3.925781.328125-5.519531 1.488282l-49.160156 35.632812-49.167969-35.632812c-1.363281-.996094-3.003906-1.53125-4.6875-1.527344-.28125 0-.5625 0-.800781.039062l-60.402344 6.3125-24.679687-55.480468c-.804688-1.8125-2.25-3.261719-4.0625-4.066407l-55.511719-24.6875 6.304687-60.382812c.203125-1.960938-.324218-3.929688-1.480468-5.527344l-35.632813-49.167969 35.632813-49.167968c1.15625-1.597657 1.683593-3.566407 1.480468-5.527344l-6.304687-60.386719 55.480469-24.695313c1.8125-.796874 3.261718-2.242187 4.0625-4.054687l24.679687-55.480469 60.402344 6.3125c1.957031.195313 3.921875-.335937 5.519531-1.488281l49.167969-35.632813 49.167969 35.632813c1.59375 1.15625 3.558593 1.683594 5.519531 1.488281l60.398437-6.3125 24.679688 55.480469c.804687 1.8125 2.253906 3.257813 4.066406 4.0625l55.480469 24.6875-6.304688 60.386719c-.207031 1.960937.320313 3.929687 1.480469 5.527344l35.628906 49.167968zm0 0"
                              ></path>
                              <path
                                d="m341.425781 157.308594c-3.125-3.125-8.1875-3.125-11.3125 0l-130.101562 130.101562-39.625-39.550781c-3.121094-3.113281-8.175781-3.113281-11.296875 0l-22.679688 22.542969c-1.503906 1.5-2.351562 3.539062-2.351562 5.664062s.847656 4.164063 2.351562 5.664063l67.921875 67.921875c3.121094 3.121094 8.1875 3.121094 11.3125 0l158.398438-158.402344c3.121093-3.121094 3.121093-8.1875 0-11.3125zm-141.414062 175.382812-56.601563-56.601562 11.3125-11.285156 39.640625 39.558593c3.121094 3.117188 8.179688 3.117188 11.304688 0l130.101562-130.089843 11.328125 11.328124zm0 0"
                              ></path>
                            </g>
                          </svg>
                          {{ property.verified ? 'verified': 'not verified'}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <div class="flex flex-wrap py-2">
                <span
                  class="p-2 my-1 mr-2 bg-blue-lightest rounded"
                  v-for="(feature, i) in property.facilities"
                  :key="i"
                >{{feature}}</span>
              </div>
            </div>
          </div>
        </ais-hits>
      </ais-instant-search>
    </div>
  </div>
</template>

<script>
import AppNavigationBar from "@/components/AppNavigationBar";
import AppToggle from "@/components/AppToggle";
import AppMap from "@/components/AppMap";

import StarRating from "vue-star-rating";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia.css";
import "vue-slider-component/theme/antd.css";
import VueSlider from "vue-slider-component";

const searchClient = algoliasearch(
  "D97UPSIQ04",
  "4aab387d93c9f7129edfe6d2bda44ff0"
);

export default {
  name: "HelloWorld",
  components: {
    AppNavigationBar,
    AppToggle,
    AppMap,
    StarRating,
    VueSlider
  },
  data() {
    return {
      isShowingMap: false,
      searchClient,
      value: 68
    };
  },

  methods: {
    transformItems(items) {
      console.log(items);
      return items;
    },

    countRaters(ratingsObj) {
      let total = 0;
      Object.keys(ratingsObj).forEach(k => (total += ratingsObj[k]));
      return total;
    },

    toValue(value, range) {
      return [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max
      ];
    }
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
  transform: scale(1.01);
}

a {
  outline: 0;
}
</style>
