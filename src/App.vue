<template>
    <!-- lifecycicle -->
    <div id="lifecycle">
        {{ message }}
    </div>

    <button @click="message = 'Update'">Udate</button>

    <hr>
    <!-- computed -->
    <div>{{ total }}</div>

    <input v-model="num1"/><br>
    <input v-model="num2"/>

    <hr>
    <!-- computed stter getter -->
    <div>{{ discount }}</div>

    <input v-model="num3"/><br>
    <input v-model="num4"/><br>

    <button @click="addDiscount">Discount</button>

    <hr>
    <!-- watcher -->
    <div>{{ message2 }}</div>

    <input v-model="message2"/>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hii..',
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            message2: 'test'
        }
    },
    // beforeCreate() {
    //     console.log('before create')
    //     console.log(this.message)
    // },
    // created() {
    //     console.log('created')
    //     console.log(this.message)
    //     console.log(document.getElementById('lifecycle'))
    // },
    // beforeMount() {
    //     console.log('before mount')
    //     console.log(this.message)
    // },
    // mounted() {
    //     console.log('mounted')
    //     console.log(this.message)
    //     console.log(document.getElementById('lifecycle'))
    // },
    // beforeUpdate() {
    //     console.log('before update')
    //     console.log(this.message)
    //     console.log(document.getElementById('lifecycle').textContent)
    // },
    // updated() {
    //     console.log('updated')
    //     console.log(this.message)
    //     console.log(document.getElementById('lifecycle').textContent)
    // },
    // beforeUnmount() {
    //     console.log('before unmount')
    // },
    // unmounted() {
    //     console.log('unmounted')
    // },
    computed: {
        total() {
            return parseInt(this.num1) + parseInt(this.num2)
        },
        discount: {
            get() {
                return parseInt(this.num3) + parseInt(this.num4)
            },
            set(value) {
                this.num3 -= value
                this.num4 -= value
            }
        }
    },
    methods: {
        addDiscount() {
            this.discount = 500
        }
    },
    watch: {
        message2(value) {
            console.log(
                'perubahan message2 adalah ' + value
            )
        }
    }
}
</script>