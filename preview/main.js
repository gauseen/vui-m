import Vue from 'vue'
import Router from 'vue-router'
import Vuim from 'src/index.js'

import App from './App'
import RouterConfig from './router'

// import globle css
import 'src/styles/reset.styl'

Vue.use(Router)
Vue.use(Vuim)

Vue.config.productionTip = false

var vm = new Vue({
	el: '#app',
	router: RouterConfig,
	components: { App },
	template: '<App/>'
})
