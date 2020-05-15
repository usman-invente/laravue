/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//window.Vue = require('vue');
import Vue from 'vue';
import vuetify from './vuetify'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import StoreData from './store';
import { routes } from './routes';
import App from './components/App.vue';
Vue.use(Vuex);
Vue.use(VueRouter);


 const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: 'history'
});



const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    components: {
        App
    }
});
