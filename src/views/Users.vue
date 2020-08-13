<template>
  <div class="container px-10 mx-auto">
    <h3 class="text-gray-700 text-3xl mt-5 font-medium">Users</h3>

    <div class="flex flex-wrap my-3">
      <table class="table-auto bg-white rounded shadow w-full text-center">
        <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Package</th>
            <th class="px-4 py-2">Recurring</th>
            <th class="px-4 py-2">Due Date</th>
            <th class="px-4 py-2">Joined</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Mike Heatherfield</td>
            <td class="border px-2 py-2">m.heatherfield@gmail.com</td>
            <td class="border px-4 py-2">Premium</td>
            <td class="border px-4 py-2">£15.00</td>
            <td class="border px-4 py-2">07/09/2020</td>
            <td class="border px-4 py-2">27/03/2020</td>
          </tr>
           <tr>
            <td class="border px-4 py-2">David Swimmer</td>
            <td class="border px-2 py-2">d.swimmer@gmail.com</td>
            <td class="border px-4 py-2">Basic</td>
            <td class="border px-4 py-2">£5.00</td>
            <td class="border px-4 py-2">04/9/2020</td>
            <td class="border px-4 py-2">18/11/2019</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Mike Heatherfield</td>
            <td class="border px-2 py-2">m.heatherfield@gmail.com</td>
            <td class="border px-4 py-2">Diamond</td>
            <td class="border px-4 py-2">£20.00</td>
            <td class="border px-4 py-2">24/09/2020</td>
            <td class="border px-4 py-2">01/05/2019</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
