Vue.component('query', {
    template: '#query'
});
Vue.component('picker', {
    template: '#picker',
    props: ['opts']
});
Vue.component('slider', {
    template: '#slider',
    props: ['points']
})
Vue.component('anyall', {
    template: '#anyall'
});

var app = new Vue({
    el: '#app',
    data: {
        civs: [
            {'text': 'Fire', 'class': 'btn-outline-danger'}, 
            {'text': 'Darkness', 'class': 'btn-outline-dark'}, 
            {'text': 'Water', 'class': 'btn-outline-primary'}, 
            {'text': 'Light', 'class': 'btn-outline-warning'},
            {'text': 'Nature', 'class': 'btn-outline-success'}
        ],

        types: [
            {'text': 'Creature', 'class': 'btn-outline-info'},
            {'text': 'Spell', 'class': 'btn-outline-info'},
            {'text': 'Evolution', 'class': 'btn-outline-info'},
        ],

        cost_points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],

        power_points: [500, 15000],

        set_points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        
        // throwaway variables to disable warnings
        'opt': "",
        'initialize': ""
    }
});