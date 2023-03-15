<template>
    <!-- $emit dan $refs -->
    <div>
        <span>Ini adalah child</span><br>
        <button @click="onPress()">Click dari child</button>
    </div>
</template>

<script>
export default {
    emits: ['child-click'],
    methods: {
        onClick() {
            console.log('click dari child dengan refs')
        },
        onPress() {
            this.$emit('child-click', 'click dari child dengan emit')
        }
    }
}
</script>