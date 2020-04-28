<template>
  <div class="" id="projects">

    <section class="jumbotron text-center">
        <div class="container">
            <div v-if="loading" class="btn-group spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
            </div>
            <h1 class="jumbotron-heading">
                {{ $t("menu.projects") }}
            </h1>
            <p class="lead text-muted"></p>
            
            <div>
                <div class="btn-group">
                    <div class="btn">
                        <i class="fas fa-search"></i>
                    </div>
                    <select v-model="category_selected" class="custom-select">
                        <option :value='$t("menu.all")'>
                            {{ $t("menu.all") }}
                        </option>
                        <option v-for='currentCategory in categories' :key="currentCategory" :value="currentCategory" >
                            {{currentCategory}} 
                        </option>        
                    </select>
                </div>
            </div>
        </div>
    </section>
    <div class="">
        <div class="container">
            <div class="row" v-if="projects">
                <div v-for="currentProject in projects" :key="currentProject.title" class="card shadow-sm m-4 p-4 col-sm-12 col-md-5 col-lg-5">
                    <div class="card-body">
                        <h5 class="card-title">{{ currentProject.title }}</h5>
                        <p class="card-text project-description">{{ currentProject.description }}</p>
                    </div>
                    <div class="card-footer">
                        <a v-if="currentProject.github" target="_blank" :href="currentProject.github" class="card-link">
                            <i class="fab fa-github"></i>
                        </a>
                        <a v-if="currentProject.link" target="_blank" :href="currentProject.link" class="card-link">
                            <i class="fas fa-link"></i>
                        </a>    
                    </div>        
                </div>
               
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>

import { mapGetters, mapState } from "vuex";

export default {

    data(){
        return {
            loading: true,
            category_selected: this.$t("menu.all")
        }
    },

    created(){
        this.fetchProjects(this.$t("menu.all"));
    },

    watch: {
        '$root.$i18n.locale': function(newlocale, oldlocale) {
            this.category_selected = this.$t("menu.all");
            this.fetchProjects(this.$t("menu.all"));
        },

        'category_selected': function(newcategory, oldcategory){
            this.fetchProjects(newcategory);
        }
    },

    methods: {
        fetchProjects(category){
            var all = this.$t("menu.all");
            var filter = {
                "category" : category === all ? '' : category,
                "locale": this.$root.$i18n.locale
            };
            this.$store
                .dispatch("project/projects", filter)
                .then(() => {
                    this.loading = false;
                })
        }
    },

  computed: {
    ...mapState({
        projects: state => state.project.projects,
        categories: state => state.project.categories
    }),

    ...mapGetters("project", ["projects", "categories"]),
  }
}

</script>

<style>
</style>