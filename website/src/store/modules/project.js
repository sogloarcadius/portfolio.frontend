import { ProjectService } from '@/common/api'


// initial state
export const state = {
    projects : null
}


// getters
export const getters = {
    projects(state) {
        return state.projects;
    }
}


// actions
export const actions = {

    projects(context, locale){
        ProjectService.init();

        return new Promise((resolve, reject) => {
            ProjectService.projects(locale)
            .then(({ data }) => {
                context.commit("projects", data);
                resolve(data);
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
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}