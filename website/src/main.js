import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from '@/App'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  en: {
    "menu": {
      "about": "About",
      "projects": "Portfolio",
      "presentations": "Presentations",
      "blog": "Blog"
    }
  },
  fr: {
    "menu": {
      "about": "Biographie",
      "projects": "Portfolio",
      "presentations": "Presentations",
      "blog": "Blog"
    }
  },
  es: {
    "menu": {
      "about": "Biografia",
      "projects": "Proyectos",
      "presentations": "Presentaciones",
      "blog": "Blog"
    }
  }
};

const i18n = new VueI18n({
  locale: 'en', 
  messages,
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
