<template>
  <div id="app">
    <div x-data="{ sidebarOpen: true }" class="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />
      <div class="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <router-view />
        </main>
      </div>
    </div>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
#app {
  height: 100%
}

html, body {
  height: 100%
}
</style>