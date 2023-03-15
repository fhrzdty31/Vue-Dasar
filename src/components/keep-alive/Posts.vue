<template>
    <div>Post Tab</div>
    <ul>
        <li
            v-for="post in posts"
            :key="post"
        >
            {{ post.name }}
    </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    async created() {
        const res = await fetch('https://swapi.dev/api/planets/')
        let {results} = await res.json()
        this.posts = results
    }
}
</script>