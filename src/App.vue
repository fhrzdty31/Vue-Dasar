<template>
    <!-- $emit dan $refs -->
    <Child1 ref="childCompoent" @child-click="onPress"/>
    <button @click="click">Click</button>

    <hr>
    <!-- update state parent -->
    <div>{{ message }}</div>
    <Child2 v-model="message"/>

    <hr>
    <!-- slot -->
    <Child3>
        <template v-slot:slot1="{ data1 }">
            <span>{{ data1 }}</span>
        </template>
        <template v-slot:slot2="{ data2 }">
            <span>{{ data2 }}</span>
        </template>
    </Child3>

    <hr>
    <!-- component global -->
    <ChildGlobal/>

    <hr>
    <!-- type on props -->
    <Child4 :message="'test'" :number="12"/>

    <hr>
    <!-- provide and inject -->
    <Child5/>

    <hr>
    <!-- keep-alive -->
    <div class="tab">
        <button
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab"
        >
            {{ tab }}
        </button>
        <br><br>
        <KeepAlive>
            <component :is="currentTab"/>
        </KeepAlive>
    </div>

    <hr>
    <!-- mixins -->
    <pre>{{ $data }}</pre>

    <!-- teleport -->
    <Teleport to="#target-teleport">
        <ChildIndex/>
    </Teleport>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
import Child3 from './components/Child3.vue'
import Child4 from './components/Child4.vue'
import Child5 from './components/Child5.vue'
import Home from './components/keep-alive/Home.vue'
import Posts from './components/keep-alive/Posts.vue'
import About from './components/keep-alive/About.vue'
import ChildIndex from './components/ChildIndex.vue'

import basic from './mixins/basic'

export default {
    components: {
        Child1,
        Child2,
        Child3,
        Child4,
        Child5,
        Home,
        Posts,
        About,
        ChildIndex
    },
    mixins: [basic],
    methods: {
        onPress(val) {
            console.log(val)
        },
        click() {
            this.$refs.childCompoent.onClick()
        }
    },
    data() {
        return {
            message: 'hallo...',
            author: 'Fahreza',
            tabs: ['Home', 'Posts', 'About'],
            currentTab: 'Home'
        }
    },
    provide() {
        return {
            author: this.author
        }
    }
}
</script>