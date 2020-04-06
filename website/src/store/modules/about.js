import { BiographyService } from '@/common/api'


// initial state
export const state = {
    biography: null
}


// getters
export const getters = {
    biography(state) {
        return state.biography;
    }
}


// actions
export const actions = {

    biography(context, locale){
        console.log("action trigerred");
        BiographyService.init();

        return new Promise((resolve, reject) => {
            BiographyService.about(locale)
            .then(({ data }) => {
                context.commit("biography", data);
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
    biography(state, data){
        state.biography = data;
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}