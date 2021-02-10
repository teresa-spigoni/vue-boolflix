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
                    for (let x = 0; x < the.data.results.length; x++) {
                        self.moviesList.push(the.data.results[x])
                    }
                })
        },
        seriesGenerator: function() {
            const self = this;
            self.seriesList = [];
            axios
                .get('https://api.themoviedb.org/3/search/tv?api_key=95d6ec199940a49c89273e717c71bedf&query=' + self.searched)
                .then(function(the) {
                    for (let x = 0; x < the.data.results.length; x++) {
                        self.seriesList.push(the.data.results[x])
                    }
                })
        },
        vote: function(movie, num1, num2) {
            return {'fa' : true, 'fa-star': (Math.ceil(movie.vote_average / 2)) > num1, 'fa-star-o': (Math.ceil(movie.vote_average / 2)) <= num2}
        }
    }
});
Vue.config.devtools = true;

































//
