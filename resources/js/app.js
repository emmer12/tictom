require('./bootstrap');

require('alpinejs');

import Vue from 'vue'

import moment from 'moment' 
import VueRouter from "vue-router";
import VueToast from 'vue-toast-notification';


import 'vue-toast-notification/dist/theme-sugar.css';


import { ValidationProvider,ValidationObserver } from 'vee-validate';


import { extend } from 'vee-validate';
import { required, email,min,max,integer } from 'vee-validate/dist/rules';

// No message specified.
extend('email', email);

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
});



Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


// import vueFilePond from 'vue-filepond';




// Import plugins
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';
// import FilePondPluginImageOverlay from 'filepond-plugin-image-overlay';
// Import styles
// import 'filepond/dist/filepond.min.css';

// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
// import 'filepond-plugin-image-overlay/dist/filepond-plugin-image-overlay.min.css'




// Create FilePond component
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);
// const FilePond = vueFilePond();

import routes from './router'


// Vue.component('pagination', require('laravel-vue-pagination'));

Vue.component("member-dashboard", () => import("./modules/member/layout/main"));

Vue.component("api", () => import("./components/Api"));


let router = new VueRouter({
    // mode: 'history',
    routes
});

Vue.use(VueRouter)
Vue.use(VueToast,{
        // One of the options
        position: 'top'
})







Vue.filter('formatMoney',function(value){
    return (value).toLocaleString('USD', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      
})

Vue.filter('truncate',function(value,length=35){
    let word=value.trim()
    return word.length < length ? word : `${word.slice(0, length)}...`   
})


const app = new Vue({
    router,
    el: '#member-app',
});



const app2 = new Vue({
    el: '#app',
});
