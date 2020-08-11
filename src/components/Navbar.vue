<template>
  <header
    class="flex justify-between items-center py-4 px-6 bg-white border-b-2 border-orange-500 h-12"
  >
    <div class="flex items-center">
      <button class="text-gray-500 focus:outline-none lg:hidden" v-on:click="toggleSidebar">
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center">

    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
      toggleSidebar() {
          if(this.$store.state.sidebarOpen) {
              this.$store.dispatch('closeSidebar')
          } else {
              this.$store.dispatch('openSidebar')
          }
      }
  }
};
</script>
