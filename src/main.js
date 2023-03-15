import { createApp } from 'vue'
import App from './App.vue'

// component global
import ChildGlobal from './components/ChildGlobal.vue'

createApp(App)
    .component("ChildGlobal", ChildGlobal)
    .mount('#app')
