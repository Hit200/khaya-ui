<template>
  <div>
    <div class="hero">
      <nav class="bg-low-opacity">
        <div class="container mx-auto w-full flex items-center justify-between">
          <img src="/static/logo-dark.svg" class="h-10" alt>
          <div class="flex items-center">
            <router-link
              to="/homes"
              class="py-6 border-b-2 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
              :class="{'border-purple': $route.name === 'PropertiesListing'}"
            >Explore homes</router-link>
            <router-link
              to="/new"
              class="py-6 border-b-2 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
              :class="{'border-purple': $route.name === 'CreateNewhome'}"
            >Rent Out Your home</router-link>
            <a
              href="#"
              class="py-6 border-b-2 border-transparent hover:border-purple no-underline font-medium text-grey-darkest px-2 lg:px-4"
            >Create Account</a>
            <router-link
              to="/login"
              class="no-underline font-medium text-white py-2 px-4 rounded bg-purple"
            >Login</router-link>
          </div>
        </div>
      </nav>
      <div class="hero__content pt-24 container mx-auto">
        <h1 class="font-black text-5xl text-white mb-8 max-w-md">
          <span class="yellow-underline">High Quality</span> and
          <span class="yellow-underline">affordable</span> accomodation you can count on
        </h1>
        <router-link
          to="/homes"
          class="inline-block no-underline py-6 px-10 bg-white text-purple shadow-lg text-lg"
        >Explore homes</router-link>
      </div>
    </div>
    <div class="search-box w-full flex justify-end h-32 -mt-24 mb-16">
      <div class="h-full w-1/2 bg-white flex items-center pl-8 text-black border shadow-lg">
        <svg
          class="fill-current h-6 w-6 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          ></path>
        </svg>
        <input type="text" placeholder="Search for accomodation" class="py-8 bg-transparent">
      </div>
    </div>

    <section class="container mx-auto flex mb-32">
      <div class="mt-32">
        <h3 class="text-3xl font-bold mb-10">Handpicked homes for you.</h3>
        <p class="max-w-sm leading-normal mb-6">
          Each of the homes is carefully vetted and verified so you are guaranteed your stay will be a pleasant one.
          From low cost housing with minimalist amemnities to the more luxurious homes, we've got something for everyone.
        </p>
        <router-link
          to="/homes"
          class="inline-block no-underline py-4 px-6 bg-white shadow text-purple text-lg"
        >See all homes</router-link>
      </div>
      <div class="p-8 flex-1 flex justify-center">
        <!-- home 1 -->
        <div class="home-1 rounded h-80 w-80 shadow-lg relative">
          <div class="absolute pin-b p-4 text-white font-bold">
            <div>
              <svg
                v-for="i in 4"
                :key="i"
                fill="yellow"
                class="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                ></path>
              </svg>
            </div>
            <span class="text-md">47 Castens, Belvedere, Harare</span>
          </div>
        </div>

        <div class="home-2 rounded mt-32 -ml-6 h-80 w-80 shadow-lg relative">
          <div class="absolute pin-b p-4 text-white font-bold">
            <div>
              <svg
                v-for="i in 4"
                :key="i"
                fill="yellow"
                class="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                ></path>
              </svg>
            </div>
            <span class="text-md">47 Castens, Belvedere, Harare</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto flex items-center mb-32">
      <div class="w-1/2">
        <div class="surburb-image relative w-4/5 h-80">
          <div class="absolute pin-b flex justify-center w-full">
            <router-link
              to="/homes"
              class="inline-block no-underline py-4 px-6 bg-white text-purple shadow-lg -mb-4 text-lg"
            >Explore our homes</router-link>
          </div>
        </div>
      </div>
      <div class="flex-1 w-1/2 p-8">
        <h3 class="text-3xl font-bold mb-10">We have homes in many places</h3>
        <ul class="list-reset">
          <li class="text-lg mb-4">
            <a href="#" class="text-current no-underline yellow-underline-1 text-lg">Belvedere</a>
          </li>
          <li class="text-lg mb-4">
            <a href="#" class="text-current no-underline yellow-underline-1 text-lg">Mount Pleasant</a>
          </li>
          <li class="text-lg mb-4">
            <a href="#" class="text-current no-underline yellow-underline-1 text-lg">Senga</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="purple-blue-gradient container mx-auto mb-32 rounded overflow-hidden">
      <div class="credit-card-bg p-16 text-white">
        <h3 class="text-3xl mb-10">Make money with Khaya</h3>
        <p class="mb-6 text-lg max-w-md text-blue-lightest">
          You can apply to have your hose listed on Khaya and enjoy the revenue of renting out your house to students.
          If you believe your house has the quality required of Khaya homes, apply below.
        </p>
        <button class="py-4 px-6 bg-white text-purple text-lg">Apply to list your home</button>
      </div>
    </section>

    <section class="container mx-auto mb-10 text-lg">
      <div class="flex justify-between">
        <ul class="list-reset">
          <li class="uppercase mb-4">
            <a href="#" class="no-underline yellow-underline-1 text-grey-darkest">Home</a>
          </li>
          <li class="uppercase mb-4">
            <a href="#" class="no-underline yellow-underline-1 text-grey-darkest">Find Accomodation</a>
          </li>
          <li class="uppercase mb-4">
            <a href="#" class="no-underline yellow-underline-1 text-grey-darkest">List your home</a>
          </li>
          <li class="uppercase mb-4">
            <a href="#" class="no-underline yellow-underline-1 text-grey-darkest">Terms</a>
          </li>
          <li class="uppercase mb-4">
            <a href="#" class="no-underline yellow-underline-1 text-grey-darkest">Privacy</a>
          </li>
        </ul>
        <div class="text-right leading-normal">
          <pre class="text-xl font-sans">
          S101 Hit Campus
          Ganges Road,
          Belvedere, Harare
        </pre>
          <a href="mailto:hello@khaya.com">hello@khaya.com</a>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-4 border-t flex items-center justify-between font-bold">
      <img src="/static/logo-dark.svg" class="h-10" alt>
      &copy; {{ (new Date()).getFullYear() }} Khaya Plc
      <div>
        <svg
          class="fill-current h-6 w-6 mr-2"
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
          class="fill-current h-6 w-6"
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
  
};
</script>

<style>
.hero {
  background-image: linear-gradient(45deg, #49e1f275, #49e2f20f),
    url(/static/architecture-building-driveway-186077.jpg);
  background-size: cover;
  background-position: 10% center;
  height: 90vh;
  width: 100%;
}

/*
The z-index issue with pseudo elements
- both parent and child should have relative and absolute positioning respectively
- the parent 'has' to have the z-index 
- the pseudo elememnt has to have a negative margin
*/
.yellow-underline,
.yellow-underline-1 {
  @apply relative inline-block z-50;
}

.yellow-underline::before {
  z-index: -1;
  @apply absolute pin-b mb-2 w-full h-2 bg-yellow;
  content: "";
}
.yellow-underline-1::before {
  z-index: -1;
  @apply absolute pin-b mb-1 w-full h-1 bg-yellow;
  content: "";
}

.bg-low-opacity {
  background: #ffffff4d;
}

.home-1 {
  background-image: linear-gradient(
      0deg,
      #49e2f2ff 0%,
      #49e2f220 25%,
      #49e2f20f 25%,
      #49e2f20f 100%
    ),
    url(/static/architecture-building-driveway-186077.jpg);
  background-size: cover;
  background-position: center center;
}
.home-2 {
  background-image: linear-gradient(
      0deg,
      #49e2f2ff 0%,
      #49e2f220 25%,
      #49e2f20f 25%,
      #49e2f20f 100%
    ),
    url(/static/sample-house.jpeg);
  background-size: cover;
  background-position: center center;
}
.surburb-image {
  background-image: url(/static/sample-house.jpeg);
  background-size: cover;
  background-position: center center;
}
.purple-blue-gradient {
  background-image: linear-gradient(45deg, #46cefc, #203fca);
}
.credit-card-bg {
  background-image: linear-gradient(#203fcaa0, #203fcaa0),
    url(/static/credit-card.svg);
  background-size: contain;
  background-position: 105% center;
  background-repeat: no-repeat;
}
</style>
