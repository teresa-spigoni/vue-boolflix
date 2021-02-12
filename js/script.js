new Vue({
    el: '#app',
    data: {
        searched: '',
        moviesList: [],
        moviesCredits: [],
        moviesGenres: [],
        seriesList: [],
        seriesCredits: [],
        seriesGenres: [],
        flags: ['de', 'en', 'es', 'fr', 'it', 'ja']
    },
    methods: {
      search: function () {
        this.moviesGenerator();
        this.seriesGenerator();
      },
      moviesGenerator: function() {
          const self = this;
          self.moviesList = [];
          axios
              .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                  api_key: '95d6ec199940a49c89273e717c71bedf',
                  query: self.searched,
                },
              })
              .then(function(the) {
                  self.moviesList = the.data.results;
              })
      },
      movieCredits: function () {
        const self = this;
        self.moviesCredits = [];
        axios
            .get('https://api.themoviedb.org/3/movie/' + '9762' + '/credits', {
              params: {
                api_key: '95d6ec199940a49c89273e717c71bedf',
              },
            })
            .then(function(the) {
              for (var x = 0; x < 5; x++) {
                self.moviesCredits += the.data.cast[x];
              }
            })
      },
      seriesGenerator: function() {
          const self = this;
          self.seriesList = [];
          axios
              .get('https://api.themoviedb.org/3/search/tv', {
                params: {
                  api_key: '95d6ec199940a49c89273e717c71bedf',
                  query: self.searched,
                },
              })
              .then(function(the) {
                  self.seriesList = the.data.results;
              })
      },
      serieCredits: function() {
        const self = this;
        self.seriesCredits = [];
        axios
            .get('https://api.themoviedb.org/3/tv/' + '9762' + '/credits', {
              params: {
                api_key: '95d6ec199940a49c89273e717c71bedf',
              },
            })
            .then(function(the) {
              for (var x = 0; x < 5; x++) {
                self.seriesCredits += the.data.cast[x];
              }
            })
      },
      vote: function(movie) {
          return (Math.ceil(movie.vote_average / 2))
      }
    },
    mounted() {
      // due chiamate, una per i generi tv e l'altra per i generi movie
    }
});
Vue.config.devtools = true;

































//
