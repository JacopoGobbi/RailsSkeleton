/* eslint no-console: 0 */

import Vue from 'vue/dist/vue.esm'
import Turbolinks from 'turbolinks'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import App from '../app.vue'

Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
    Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    const element = document.getElementById("test_component")
    const app = new Vue({
        el: element,
        components: { App }
    })
})
