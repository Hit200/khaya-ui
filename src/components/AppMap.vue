<template>
  <div class="map w-full bg-black border-b-2 relative" :class="{'map--showing': show, 'map--sticky': fixedPosition}">
    <div class="absolute pin-r flex items-center justify-center bg-white rounded  mt-4 mr-4 p-2">
      <button class=" py-2 px-4 rounded bg-white hover:bg-purple-lighter mr-2" :class="{'bg-purple-light': fixedPosition, 'text-white': fixedPosition}" @click="fixedPosition = !fixedPosition">Fixed Position</button>
      <button class=" py-2 px-4 rounded bg-white hover:bg-purple-lighter">Pick My Location</button>
    </div>

    <h3 class="absolute pin-b text-white pb-12 pl-12">The map comes here!</h3>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data () {
    return {
      fixedPosition: false
    }
  }
}
</script>

<style>
  /* The default map behaviour */
  .map {
    /* display: none; */
    height: 0;
    transition: height .4s ease-out;
    pointer-events: none;
  }
  .map * {
    opacity: 0;
  }


  /* The behaviour of the map when it is being shown */
  .map--showing {
    pointer-events: initial;
    display: block;
    height: 300px;
  }
  .map--showing * {
    opacity: 1
  }

  /* The behaviour of the map when it is pinned to the top */
  .map--sticky {
    position: sticky;
    top: 0;
  }
</style>
