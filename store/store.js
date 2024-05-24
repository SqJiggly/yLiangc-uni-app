import Vue from "vue";
import Vuex from 'vuex'

import shopcar from "./shopcar.js";

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
	  shopcar
	}
})

export default store