import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        lastname: '',
    }),
    getters: {
        fullName: (state) => `${state.name} ${state.lastname}`,
        nameUpper: (state) => state.name.toUpperCase(),
        lastnameUpper: (state) => state.lastname.toUpperCase(),
        fullNameUpper: (state) => `${state.name.toUpperCase()} ${state.lastname.toUpperCase()}`,
    },
    actions: {
        setName(name) {
            this.name = name;
        },
        setLastname(lastname) {
            this.lastname = lastname;
        },
    },
});