<template>
    <!-- Deklarative rendering -->
    <div>
        {{ message1 }}
    </div>
    <span :title="message">blablabla</span>
    
    <hr>
    <!-- methods -->
    <div>Count: {{ count1 }}</div>
    <button @click="count1++">Count ++</button>
    <button @click="count1--">Count --</button>
    <button @click="addCount">Reset</button>

    <hr>
    <!-- v-model -->
    <div>{{ message2 }}</div>
    <input type="text" v-model="message2">

    <hr>
    <!-- v-if -->
    <div v-if="status1">INI TAMPIL</div>
    <button @click="status1 = !status1">Status</button>
    <div v-if="status1">Status: true</div>
    <div v-else>Status: false</div>

    <hr>
    <!-- v-for -->
    <ol>
        <li v-for="todo in todos">
            {{ todo }}
        </li>
    </ol>

    <hr>
    <!-- component -->
    <div>ini adalah parent component</div>
    <div>
        <Component1/>
    </div>

    <hr>
    <!-- props -->
    <Component2 text="props child"/>
    <Component2 :text="message1"/>

    <hr>
    <!-- loop component -->
    <Component2 v-for="todo in todos" :text="todo"/>

    <hr>
    <!-- v-once -->
    <div>{{ message3 }}</div>
    <div v-once>{{ message3 }}</div>
    <button @click="message3 = 'borborbor'">Update</button>

    <hr>
    <!-- v-html -->
    <div v-html="message4"></div>

    <hr>
    <!-- dynamic class -->
    <div :class="[(status2 ? 'success' : 'faild'), bold]">STATUS</div>
    <button @click="status2 = !status2">Change</button>
</template>

<script>
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'

export default {
    data() {
        return {
            message1: 'hiiii.....',
            count1: 0,
            message2: 'hallo',
            status1: false,
            todos: ['Menyapu', 'Mengepel' ,'Memasak'],
            message3: 'hi broo',
            message4: '<span style="color: blue">biru</span>',
            status2: true,
            bold: 'bold'
        }
    },
    methods: {
        addCount() {
            this.count1 = 0
        }
    },
    components: {
        Component1,
        Component2
    }
}
</script>

<style scoped>
.success {
    color: green;
}
.faild {
    color: red;
}
.bold {
    font-weight: bold;
}
</style>