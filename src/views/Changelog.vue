<template>
    <VueShowdown
    markdown="## markdown text"
    flavor="github"
    :options="{ emoji: true }"/>
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
            axios.get('https://raw.githubusercontent.com/dmdboi/vue-admin/master/Changelog.md').then((response) => this.changelog = response.data)
        }
    }
}


</script>