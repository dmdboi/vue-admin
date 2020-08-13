<template>
  <div class="container px-10 mx-auto">

    <div class="w-full lg:w-1/2 mx-auto mt-5 bg-white rounded p-4">
      <section class="py-8">
        <div class="w-full max-w-sm mx-auto">
          <h3 class="text-gray-700 text-3xl my-5 font-medium">Settings</h3>
          <form _lpchecked="1">
            <div class="mb-4">
              <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" value="Admin" type="_text" placeholder="Username" autocomplete="off">
            </div>
            <div class="mb-4">
              <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" value="Admin@vueadmin.com" type="_text" placeholder="Email" autocomplete="off">
            </div>
            <div class="mb-4">
              <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Password" autocomplete="off">
            </div>
            <div class="mb-4">
              <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Confirm Password" autocomplete="off">
            </div>
            <div class="mb-4">
              <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">Save</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
