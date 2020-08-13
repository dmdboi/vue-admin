<template>
        <div class="w-full lg:w-1/2 mx-auto mt-5 bg-white rounded p-4">
            <VueShowdown
                v-if="changelog"
                :markdown="changelog"
                flavor="github"
                class="markdown-body"
                :options="{ emoji: true }"/>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Changelog',
    data() {
        return {
            changelog: null
        }
    },
    created() {
        this.getChangelog()
    },
    methods: {
        getChangelog() {
            axios.get('https://raw.githubusercontent.com/dmdboi/vue-admin/master/ChangeLog.md').then((response) => 
            {
                console.log(response)
                this.changelog = response.data
            })
        }
    }
}


</script>