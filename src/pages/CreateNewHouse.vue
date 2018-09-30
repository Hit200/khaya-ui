<template>
  <div>
    <!-- Primary Navigation bar -->
    <AppNavigationBar/>

    <div class="container mx-auto mt-6">
     
     <div class="flex mb-4">
       <div class="mr-4">
         <label for="address" class="block mb-2 font-medium">Address</label>
         <input type="text" class="py-2 px-4 bg-white border rounded">
       </div>

       <div>
         <label for="coordinates" class="block mb-2 font-medium">Coordinates</label>
         <button class="py-2 px-4 rounded bg-white border shadow">
           <svg class="h-4" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
           Pick cooridnates on the map
         </button>
       </div>
     </div>

     <div class="mb-4">
       <label for="description" class="block mb-2 font-medium">Description</label>
       <textarea name="" id="" cols="30" rows="10" class="w-full"></textarea>
     </div>

     <div class="mb-4">
       <label for="" class="block mb-2 font-medium">Add room</label>
        <table class="w-full bg-white rouded border">
       <!-- The inputs -->
        <tr class="w-full border-b">
          <th class="w-1/5 text-left py-2 px-4">
            <label for="address" class="block mb-2 font-medium">Room Number</label>
            <input type="text" class="py-2 px-4 bg-grey-lightest border rounded">
          </th>

          <th class="w-1/5 text-left py-2 px-4">
            <label for="address" class="block mb-2 font-medium">Number of Occupants</label>
            <input type="text" class="py-2 px-4 bg-grey-lightest border rounded">
          </th>

          <th class="w-1/5 text-left py-2 px-4">
            <label for="address" class="block mb-2 font-medium">Gender(s) allowed</label>
            <select class="py-2 px-4 bg-grey-lightest border rounded">
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="male-and-female">male and female</option>
              <option value="male-or-female">male or female</option>
            </select>
          </th>

          <th class="w-1/5 text-left py-2 px-4">
            <label for="address" class="block mb-2 font-medium">Monthly Price</label>
            <input type="text" class="py-2 px-4 bg-grey-lightest border rounded">
          </th>

          <th class="w-1/5 text-left py-2 px-4">
            <label for="address" class="block mb-2 font-medium">Room Photo</label>
            <button class="inline-flex items-center justify-center py-2 px-4 rounded shadow bg-purple text-white w-full">
              <svg class="h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
               <span>Upload</span>
            </button>
          </th>
        </tr>

        <!-- The outputs -->
          <tr class="w-full border-b" v-for="i in 3" :key="i">
            <td class="w-1/5 py-2 px-4">Room 1</td>
            <td class="w-1/5 py-2 px-4">4 People</td>
            <td class="w-1/5 py-2 px-4">Male</td>
            <td class="w-1/5 py-2 px-4">$80/month</td>
            <td class="w-1/5 py-2 px-4">
              <div class="w-full flex justify-between items-center">
                <div class="h-8 w-8 bg-grey-light rounded flex-no-shrink">&nbsp;</div>

              <div class="flex items-center">
                <button class="py-2 px-4 rounded bg-white border mr-2">
                  <svg class="h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
               </button>
               <button class="py-2 px-4 rounded bg-white border">
                <svg class="h-4" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
               </button>
              </div>
              </div>
            </td>
          </tr>
        </table>
     </div>
    </div>
  </div>
</template>

<script>
import AppNavigationBar from '@/components/AppNavigationBar'
export default {
  name: 'CreateNewHouse',
  components: {
    AppNavigationBar
  }
}
</script>

<style>

</style>
