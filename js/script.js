new Vue({
    el: '#app',
    data: {
        searched: '',
        moviesList: [],
        seriesList: []
    },
    methods: {
        moviesGenerator: function() {
            const self = this;
            self.moviesList = [];
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=95d6ec199940a49c89273e717c71bedf&query=' + self.searched)
                .then(function(the) {
                    self.moviesList = the.data.results;
                })
        },
        seriesGenerator: function() {
            const self = this;
            self.seriesList = [];
            axios
                .get('https://api.themoviedb.org/3/search/tv?api_key=95d6ec199940a49c89273e717c71bedf&query=' + self.searched)
                .then(function(the) {
                    self.seriesList = the.data.results;
                })
        },
        vote: function(movie) {
            return (Math.ceil(movie.vote_average / 2))
        }
    }
});
Vue.config.devtools = true;

































//
