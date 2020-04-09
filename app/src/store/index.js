import Vue from 'vue'
import Vuex from 'vuex'

import about from '@/store/modules/about'
import project from '@/store/modules/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    about,
    project
  }
})
