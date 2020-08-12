<template>
  <div class="container px-10 mx-auto">
    <h3 class="text-gray-700 text-3xl mt-5 font-medium">Dashboard</h3>

    <div class="flex flex-wrap -mx-8 my-3">
      <div class="w-1/2 md:w-1/4 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2 px-3 text-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="user-group w-12 h-12 text-gray-900 mx-auto my-4"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
            <h4 class="text-2xl font-semibold text-gray-700">100</h4>
            <div class="text-gray-500">New Users</div>
        </div>
      </div>

            <div class="w-1/2 md:w-1/4 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2 px-3 text-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="chat w-12 h-12 text-gray-900 mx-auto my-4"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path></svg>
            <h4 class="text-2xl font-semibold text-gray-700">167</h4>
            <div class="text-gray-500">New Tickets</div>
        </div>
      </div>

            <div class="w-1/2 md:w-1/4 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2 px-3 text-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="calendar w-12 h-12 text-gray-900 mx-auto my-4"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            <h4 class="text-2xl font-semibold text-gray-700">£1,500</h4>
            <div class="text-gray-500">MRR</div>
        </div>
      </div>

      <div class="w-1/2 md:w-1/4 px-8 mb-4 md:mb-0">
        <div class="shadow rounded bg-white py-2 px-3 text-center">
            <svg viewBox="0 0 20 20" fill="currentColor" class="currency-pound w-12 h-12 text-gray-900 mx-auto my-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
            <h4 class="text-2xl font-semibold text-gray-700">£435</h4>
            <div class="text-gray-500">Payouts</div>
        </div>
      </div>
    </div>

    

    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
