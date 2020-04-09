import { ProjectService } from '@/common/api'

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

        return new Promise((resolve, reject) => {
            ProjectService.projects(filter.locale)
            .then(({ data }) => {
                var categories = _.uniq(_.map(data, 'category'));
                context.commit("categories", categories);

                if (!_.trim(filter.category)) {
                    context.commit("projects", data);
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