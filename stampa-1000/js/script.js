// Stampare numeri da 1 a 1000 tramite v-for

const {createApp} = Vue;

createApp({
    data() {
        return {
            userNumber: 0,
            numbersShow: false    
        }
    },
    methods: {
        showUserNumbers: function() {
            this.numbersShow = true;
        }
    }
}).mount("#app");