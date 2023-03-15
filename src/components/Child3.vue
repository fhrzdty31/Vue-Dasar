<template>
    <!-- slot -->
    <div>Header child</div>
    <slot name="slot1" :data1="title"></slot>
    <div>Content child</div>
    <slot name="slot2" :data2="content"></slot>
    <div>Footer child</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Title data child for parent',
            content: 'Content data child for parent'
        }
    }
}
</script>