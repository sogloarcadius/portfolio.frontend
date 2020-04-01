<template>
  <div id="home">

     <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100" v-if="biography">
        <h1 class="mb-0" >{{ biography[0].firstname}}
          <span class="text-primary">{{ biography[0].surname }} </span>
        </h1>
        <div class="subheading mb-5">{{ biography[0].address}} ·
          <a href="#">{{ biography[0].email}}</a>
        </div>
        <p class="lead mb-5">{{ biography[0].summary}}</p>
        <div class="social-icons">
          <a target="_blank" href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="#">
            <i class="fab fa-github"></i>
          </a>
          <a target="_blank" href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a target="_blank" href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
    
  </div>
</template>


<script>

import { mapGetters, mapState } from "vuex";

export default {
  
  created(){
    this.fetchBiography();
  },
  
  watch: {
    '$root.$i18n.locale': "fetchBiography"
  },
  
  methods: {
    fetchBiography() {
      console.log("called");
      this.$store
        .dispatch("about/biography", this.$root.$i18n.locale)
        .then(() => this.$router.push({ name: "home" })).catch(err => {})
    }
  },

  computed: {

    ...mapState({
        biography: state => state.about.biography
    }),

    ...mapGetters("about", ["biography"]),

  }
}

</script>

<style>
</style>