<template>
  <div class="" id="projects">

    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">{{ $t("menu.projects") }}</h1>
            <p class="lead text-muted"></p>
            <div>
                <div class="btn-group">
                    <button type="button" class="btn">
                        <i class="fas fa-search"></i>
                    </button>
                    <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Filter</span>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" @click="fetchProjects('')" >
                            <i class="fas fa-th"></i>
                        </a>
                        <a v-for='currentCategory in categories' class="btn dropdown-item" :key="currentCategory" @click="fetchProjects(currentCategory)" >
                            <i class="fas fa-th"></i> {{currentCategory}} 
                        </a>        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="">
        
        <div class="container">
            
           
            <div class="row" v-if="projects">
                <div v-for="currentProject in projects" :key="currentProject.title" class="card shadow-sm m-4 p-4 col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">{{ currentProject.title }}</h5>
                        <p class="card-text">{{ currentProject.description}}</p>
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

    created(){
        this.fetchProjects('');
    },

    watch: {
        '$root.$i18n.locale': function(newlocale, oldlocale) {
            console.log(oldlocale);
            console.log(newlocale);
            this.fetchProjects('');
        }
    },

    methods: {

        fetchProjects(category){
            console.log(category);
            var filter = {
                "category" : category,
                "locale": this.$root.$i18n.locale
            };
            this.$store
                .dispatch("project/projects", filter)
                .then(() => this.$router.push({ name: "projects" })).catch(err => {})
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