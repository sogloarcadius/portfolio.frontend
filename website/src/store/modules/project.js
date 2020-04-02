import { ProjectService } from '@/common/api'
import _ from 'lodash';


// initial state
export const state = {
    projects: null,
    categories: null
}

// getters
export const getters = {

    projects(state) {
        return state.projects;
    },

    categories(state) {
        return state.categories;
    }
}


// actions
export const actions = {

    projects(context, filter){
        ProjectService.init();
        console.log(filter);

        return new Promise((resolve, reject) => {
            ProjectService.projects(filter.locale)
            .then(({ data }) => {
                console.log(data);
                var categories = [];
                _.forEach(data, function(project){
                    console.log(project.category);
                    categories.push(project.category);
                })
                console.log("after getted categories");

                console.log(this.categories);
                context.commit("categories", categories);

                if (!_.trim(filter.category)) {
                    context.commit("projects", data);
                    console.log(JSON.stringify(this.data));
                    resolve(data);
                } else {
                    var projects = data;
                    if (_.trim(filter.category)) {
                        projects = _.filter(projects, function(project) {
                            if (project.category == _.trim(filter.category)){
                              return project;
                            }});
                    }
                    context.commit("projects", projects);
                    console.log(JSON.stringify(this.projects));
                    resolve(data);
                }
            })
            .catch(({ error }) => {
                console.log(error);
                reject(error);
            })
        })
    }

}


// mutations
export const mutations = {
    projects(state, data){
        state.projects = data;
    },

    categories(state, data){
        state.categories = data;
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}