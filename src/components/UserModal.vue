<template>
    <Transition name="fade">
        <div v-if="showing" class="fixed inset-0 w-full h-screen flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div class="relative w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <button aria-label="close" class="absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4" @click.prevent="close">×</button>
                <h3 class="text-center text-xl mb-4 text-gray-900 font-bold">User Settings</h3>
                    <form class="mb-4">
                        <div class="">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Site Role
                            </label>
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Member</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                                Submit Changes
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    },
    user: null
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>