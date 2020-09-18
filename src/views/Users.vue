<template>
  <div class="container px-10 mx-auto">
    <h3 class="text-gray-700 text-3xl mt-5 font-medium">Users</h3>

    <div class="flex flex-wrap my-3">
      <table class="table-auto bg-white rounded shadow w-full text-center">
        <thead>
          <tr>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Package</th>
            <th class="px-4 py-3">Recurring</th>
            <th class="px-4 py-3">Due Date</th>
            <th class="px-4 py-3">Joined</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-3">Michael Jordan</td>
            <td class="border px-2 py-3">23@gmail.com</td>
            <td class="border px-4 py-3">Premium</td>
            <td class="border px-4 py-3">£17.69</td>
            <td class="border px-4 py-3">07/09/2020</td>
            <td class="border px-4 py-3">27/03/2020</td>
          </tr>
           <tr>
            <td class="border px-4 py-3">David Tennant</td>
            <td class="border px-2 py-2">d.swimmer@gmail.com</td>
            <td class="border px-4 py-2">Basic</td>
            <td class="border px-4 py-2">£6.00</td>
            <td class="border px-4 py-2">04/9/2020</td>
            <td class="border px-4 py-2">18/11/2019</td>
          </tr>
          <tr>
            <td class="border px-4 py-3">Mike Heatherfield</td>
            <td class="border px-2 py-2">m.heatherfield@gmail.com</td>
            <td class="border px-4 py-2">Diamond</td>
            <td class="border px-4 py-2">£20.00</td>
            <td class="border px-4 py-2">24/09/2020</td>
            <td class="border px-4 py-2">              <button @click="openModal">
                <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6 mx-auto">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                </svg>
              </button></td>
            <UserModal :showing="this.open" @close="open = false" user="Mike Heatherfield"></UserModal>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserModal from '@/components/UserModal';
export default {
  name: "Home",
  data() {
    return {
      users: null,
      open: false
    }
  },
  components: {
    UserModal
  },
    methods: {
     openModal() {
       this.open = true
     }
   }
}
</script>
