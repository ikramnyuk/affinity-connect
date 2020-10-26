import Vue from 'vue'
import Main from './Main.vue'

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false

new Vue({
	render: h => h(Main),
}).$mount('#app')
