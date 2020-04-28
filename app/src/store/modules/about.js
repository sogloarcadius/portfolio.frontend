import { BiographyService } from '@/common/api'


export const state = {
    biography: null
}


export const getters = {
    biography(state) {
        return state.biography;
    }
}

export const actions = {

    biography(context, locale){
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