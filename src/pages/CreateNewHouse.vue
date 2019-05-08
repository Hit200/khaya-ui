<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <div class="container mx-auto mt-6">
      <div class="flex mb-4">
        <div class="w-full">
          <label for="address" class="block mb-2 font-medium">Address</label>
          <input id="address-input" type="text" class="py-2 px-4 bg-white border rounded w-full">
        </div>

        <!-- <div>
          <label for="coordinates" class="block mb-2 font-medium">Coordinates</label>
          <button class="py-2 px-4 rounded bg-white border shadow">
            <svg
              class="h-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              ></path>
            </svg>
            Pick cooridnates on the map
          </button>
        </div>-->
      </div>

      <div class="mb-6">
        <label
          for="description"
          class="block mb-2 font-medium"
        >What are the best things about your house? (You can add qualities we left out)</label>
        <multiselect
          v-model="value"
          tag-placeholder="Add this as new tag"
          placeholder="Search or add a tag"
          :closeOnSelect="false"
          label="name"
          track-by="code"
          :options="options"
          :max="3"
          :multiple="true"
          :taggable="true"
          @tag="addTag"
        ></multiselect>
      </div>

      <div class="mb-4">
        <label
          for="description"
          class="block mb-2 font-medium"
        >Describe your house in the best way you can</label>
        <textarea
          v-model="property.description"
          name
          id
          cols="30"
          rows="10"
          class="w-full border rounded p-4"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for class="block mb-2 font-medium">Add details about your rooms</label>
        <table class="w-full bg-white rouded border">
          <!-- The inputs -->
          <tr class="w-full border-b">
            <th class="w-1/5 text-left p-4">
              <label for="address" class="block mb-2 font-medium">Room Number</label>
              <input
                v-model="tempRoom.number"
                type="text"
                class="py-2 px-2 bg-grey-lightest border rounded w-10"
              >
            </th>

            <th class="w-1/5 text-left p-4">
              <label for="address" class="block mb-2 font-medium">Number of Occupants</label>
              <input
                v-model="tempRoom.capacity"
                type="text"
                class="py-2 px-4 bg-grey-lightest border rounded w-16"
              >
            </th>

            <th class="w-1/5 text-left p-4">
              <label for="address" class="block mb-2 font-medium">Gender(s) allowed</label>
              <select v-model="tempRoom.gender" class="py-2 px-4 bg-grey-lightest border rounded">
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="male-and-female">male and female</option>
                <option value="male-or-female">male or female</option>
              </select>
            </th>

            <th class="w-1/5 text-left p-4">
              <label for="address" class="block mb-2 font-medium">Monthly Price ($)</label>
              <input
                v-model="tempRoom.price"
                type="text"
                class="py-2 px-4 bg-grey-lightest border rounded"
              >
            </th>

            <th class="w-1/5 text-left p-4">
              <label for="address" class="block mb-2 font-medium">&nbsp;</label>
              <button
                @click="addRoom"
                class="inline-flex items-center justify-center py-2 px-4 rounded shadow bg-purple text-white w-full"
              >
                <span>Add room</span>
              </button>
            </th>
          </tr>

          <!-- The outputs -->
          <tr class="w-full border-b" v-for="(r,i) in property.room" :key="i">
            <td class="w-1/5 py-2 px-4">Room {{r.number}}</td>
            <td class="w-1/5 py-2 px-4">{{ r.capacity }} People</td>
            <td class="w-1/5 py-2 px-4">{{ r.gender }}</td>
            <td class="w-1/5 py-2 px-4">${{ r.price }}/month</td>
            <td class="w-1/5 py-2 px-4">
              <div class="w-full flex justify-between items-center">
                <div class="h-8 w-8 bg-grey-light rounded flex-no-shrink">&nbsp;</div>

                <div class="flex items-center">
                  <button class="py-2 px-4 rounded bg-white border mr-2">
                    <svg
                      class="h-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"></path>
                    </svg>
                  </button>
                  <button class="py-2 px-4 rounded bg-white border">
                    <svg
                      class="h-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="mb-4">
        <label
          for="description"
          class="block mb-2 font-medium"
        >Upload the best pictures of your house</label>
        <input
          id="file"
          type="file"
          name="images"
          multiple
          accept="image/x-png, image/gif, image/jpeg"
        >
      </div>

      <button
        @click="submitHouseInfo"
        class="py-4 px-4 rounded shadow bg-purple text-white w-full mb-10"
      >Add your house</button>
    </div>
  </div>
</template>

<script>
import AppNavigationBar from "@/components/AppNavigationBar";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
var places = require("places.js");
import axios from "axios";
import uuidv4 from "uuid/v4";

import FB from "firebase";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBNm0FMLEtUQ23mbjlKVqn8TaF0Isu7JGQ",
  authDomain: "khaya-2019.firebaseapp.com",
  databaseURL: "https://khaya-2019.firebaseio.com",
  projectId: "khaya-2019",
  storageBucket: "khaya-2019.appspot.com"
};

if (!FB.apps.length) {
  FB.initializeApp(config);
}

const firebase = FB;

export default {
  name: "CreateNewHouse",
  components: {
    AppNavigationBar,
    Multiselect
  },
  data: () => ({
    property: {
      address: {
        street: "428 Hopkins Street",
        suburb: "Defiance",
        country: "Mauritania",
        latitude: 36.406354,
        longitude: 166.326458
      },

      verified: false,
      likes: 0,
      overallRating: 0,
      rating: {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      },

      room: [],
      description: "",

      address: {},
      location: "",
      hierarchicalLocations: {}
    },

    // multiselect stuff
    value: [],
    options: [
      { name: "Wifi", code: "wifi" },
      { name: "hot stoves", code: "hot-stoves" },
      { name: "Unlimited Wifi", code: "unlimited-wifi" },
      { name: "Safe Neighborhood", code: "safe-neighborhood" },
      { name: "Comfy Bedding", code: "comfy-bedding" }
    ],

    tempRoom: {
      number: 1,
      shared: false,
      price: 0,
      current: 0,
      gender: "female",
      capacity: 2
    }
  }),
  mounted() {
    var placesAutocomplete = places({
      appId: "plB9P3RIGHXR",
      apiKey: "de2db4b8e189cbcbba768f941594be26",
      container: document.querySelector("#address-input")
    });
    placesAutocomplete.on("change", e => {
      console.log(e.suggestion);
      const res = e.suggestion;
      this.property.address = {
        street: res.name,
        suburb: res.suburb,
        country: res.country,
        city: res.city,
        latitude: res.latlng.lat,
        longitude: res.latlng.lng
      };

      this.property.location = res.value;

      this.property.hierarchicalLocations = {
        lvl0: res.country,
        lvl1: `${res.country}>${res.city}`,
        lvl2: `${res.country}>${res.city}>${res.suburb}`
      };
    });
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    },

    addRoom() {
      const newRoom = Object.assign({}, this.tempRoom);
      newRoom.shared = newRoom.capacity > 1;

      this.property.room.push(newRoom);
    },

    submitHouseInfo() {
      // add the image and the facilities
      const files = document.getElementById("file").files;

      this.saveFileToFirebase({ files });
    },

    saveFileToFirebase({ files }) {
      // Create a root reference
      var storageRef = firebase.storage().ref();

      // to reduce the chances of duplicated filenames
      const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

      // identifier we will use to manipulate the file on firebase

      // The code that will do the actuall file uploading

      // const retrieveImageUrl = async (file, extension) => {
      //   console.log("retrieving media links");
      //   try {
      //     console.log("sending files");
      //     let storageRef = firebase
      //       .storage()
      //       .ref(`images/${uuidv4()}.${extension}`);
      //     let data = await storageRef
      //       .put(file)
      //       .then(async () => await storageRef.getDownloadURL());
      //     console.log("successful");
      //     console.log(data);
      //     return data;
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };

      const retrieveImageUrl = function(file) {
        return new Promise(function(resolve, reject) {
          // axios.post(
          //   "https://khaya-api.herokuapp.com/newProperty",
          //   newProperty
          // );
          //   var storageRef = firebase
          //     .storage()
          //     .ref(`images/${uuidv4()}-.${file.name}`);
          //   //Upload file
          //   var task = storageRef.put(file);
          //   //Update progress bar
          //   task.on(
          //     "state_changed",
          //     function progress(snapshot) {
          //       // var percentage =
          //       //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //       // uploader.value = percentage;
          //     },
          //     function error(err) {
          //       reject();
          //     },
          //     function complete() {
          //       console.log("completed");
          //       console.log();
          //       var downloadURL = task.snapshot.downloadURL;
          //       storageRef.getDownloadURL().then(url => {
          //         console.log(url);
          //         resolve(url);
          //       });
          //     }
          //   );
        });
      };

      const postToFirebase = async files => {
        console.log({ files });

        let imageArray = [];
        var bodyFormData = new FormData();
        for (let file of files) {
          bodyFormData.append("photos", file);
          // imageArray.push(await retrieveImageUrl(i, i.name.split(".").pop()));
        }

        axios({
          method: "post",
          url: "https://khaya-api.herokuapp.com/uploadPhotos",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        })
          .then(function(theoResponse) {
            //handle success
            console.log({ theoResponse });
            imageArray = theoResponse.data.url;
            resolve(imageArray);
          })
          .catch(function(response) {
            //handle error
            console.log(response);
            reject(response);
          });
      };

      // for (var i = 0; i < files.length; i++) {
      //   var imageFile = e.target.files[i];

      //   uploadImageAsPromise(imageFile);
      // }

      postToFirebase(files).then(mediaLinks => {
        const newProperty = Object.assign({}, this.property);
        newProperty.facilities = this.value.map(f => f.name);
        newProperty.media = mediaLinks;
        console.log("media links");
        console.log({ mediaLinks });
        axios
          .post("https://khaya-api.herokuapp.com/newProperty", newProperty)
          .then(res => {
            console.log(res);
            console.log("successfully created property");
          })
          .catch(error => {
            console.log("fuck! there was an error");
            console.log(JSON.stringify(error));
          });
      });

      // Just increase the upload progress to 4% just to show something
      // is happening is happening
      this.$nextTick(() => {
        this.currentUploadProgress = 4;
      });

      // Track the changes during the course of the file upload.
    }
  }
};
</script>

<style>
</style>
