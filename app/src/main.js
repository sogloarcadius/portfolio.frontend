import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from '@/App'
import router from '@/router'
import store from '@/store'

import DateFilter from "@/common/date.filter";

Vue.filter("date", DateFilter);

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  en: {
    "menu": {
      "resources": "resources",
      "all": "all",
      "about": "about",
      "projects": "portfolio",
      "presentations": "slideshare",
      "blog": "blog",
      "locale": {
        "english": "english",
        "french": "french",
        "spanish": "spanish"
      }
    }
  },
  fr: {
    "menu": {
      "resources": "ressources",
      "all": "tous",
      "about": "biographie",
      "projects": "portfolio",
      "presentations": "presentations",
      "blog": "blog",
      "locale": {
        "english": "anglais",
        "french": "francais",
        "spanish": "espagnol"
      }
    }
  },
  es: {
    "menu": {
      "resources": "recursos",
      "all": "todos",
      "about": "biografia",
      "projects": "proyectos",
      "presentations": "slideshare",
      "blog": "blog",
      "locale": {
        "english": "ingles",
        "french": "frances",
        "spanish": "español"
      }
    }
  }
};

const i18n = new VueI18n({
  locale: navigator.language, 
  messages,
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
