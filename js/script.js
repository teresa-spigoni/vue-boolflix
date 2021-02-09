new Vue({
    el: '#app',
    data: {
        searchedMovie: '',
        moviesList: []
    },
    methods: {
        moviesGenerator: function() {
            const self = this;
            self.moviesList = [];
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=95d6ec199940a49c89273e717c71bedf&query=' + self.searchedMovie)
                .then(function(the) {
                    for (let x = 0; x < the.data.results.length; x++) {
                        self.moviesList.push(the.data.results[x])
                    }
                })
            console.log(self.moviesList);
        }
    }
});
Vue.config.devtools = true;
