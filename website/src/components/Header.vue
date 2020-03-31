<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <div class="nav-item">
            <div class="row">
                <a class="nav-link" @click="changeLocale('en')">
                    <img class="img-fluid img-profile  mx-auto mb-2" src="@/assets/img/en.png" alt="" />
                </a>
                <a class="nav-link" @click="changeLocale('fr')">
                    <img class="img-fluid img-profile  mx-auto mb-2" src="@/assets/img/fr.png" alt="" />
                </a>
                <a class="nav-link" @click="changeLocale('es')">
                    <img class="img-fluid img-profile  mx-auto mb-2" src="@/assets/img/es.png" alt="" />
                </a>
            </div>
      </div>
      <a class="navbar-brand" href="#">
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/img/profile.jpeg" alt="" />
        </span>
      </a>
      <div class="collapse navbar-collapse" id="">
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link class="nav-link"  :to="{ name: 'home' }"><a>{{ $t("menu.about") }}</a></router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link"  :to="{ name: 'projects' }"><a>{{ $t("menu.projects") }}</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://sogloarcadius.github.io/presentations/" target="_blank">{{ $t("menu.presentations") }}</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="https://sogloarcadius.github.io/presentations/" target="_blank">{{ $t("menu.blog") }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

  methods: {
    changeLocale(locale){
      this.$root.$i18n.locale = locale;
    }
  }
};
</script>