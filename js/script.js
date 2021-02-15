new Vue({
    el: '#app',
    data: {
      searched: '',
      moviesList: [],
      moviesGenres: [],
      seriesList: [],
      seriesGenres: [],
      flags: ['de', 'en', 'es', 'fr', 'it', 'ja']
    },
    methods: {
      // search methods
      showSearch: function () {
        const search = document.getElementById('search');
        search.classList.toggle('none')
      },
      hideSearch: function () {
        const search = document.getElementById('search');
        search.classList.add('none');
        this.searched = '';
      },
      showMenu: function () {
        const menu = document.getElementsByClassName('users-menu')[0];
        menu.classList.toggle('none');
      },
      search: function () {
        this.moviesGenerator();
        this.seriesGenerator();
        this.hideSearch();
      },
      // movies methods
      moviesGenerator: function() {
          const self = this;
          self.moviesZero();
          axios
              .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                  api_key: '95d6ec199940a49c89273e717c71bedf',
                  query: self.searched,
                },
              })
              .then(function(the) {
                  self.moviesList = the.data.results;
              });
      },
      newMovies: function () {
        const self = this;
        self.moviesZero();
        axios
            .get('https://api.themoviedb.org/3/movie/popular', {
              params: {
                api_key: '95d6ec199940a49c89273e717c71bedf',
              },
            })
            .then(function(the) {
                self.moviesList = the.data.results;
            })
      },
      homeMovies: function () {
        const self = this;
        self.moviesZero();
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing', {
              params: {
                api_key: '95d6ec199940a49c89273e717c71bedf',
              },
            })
            .then(function(the) {
                self.moviesList = the.data.results;
            })
      },
      moviesZero: function () {
        this.moviesList = [];
      },
      // series methods
      seriesGenerator: function() {
          const self = this;
          self.seriesZero();
          axios
              .get('https://api.themoviedb.org/3/search/tv', {
                params: {
                  api_key: '95d6ec199940a49c89273e717c71bedf',
                  query: self.searched,
                },
              })
              .then(function(the) {
                  self.seriesList = the.data.results;
              });
      },
      newSeries: function () {
        const self = this;
        self.seriesZero();
        axios
            .get('https://api.themoviedb.org/3/tv/popular', {
              params: {
                api_key: '95d6ec199940a49c89273e717c71bedf',
              },
            })
            .then(function(the) {
                self.seriesList = the.data.results;
            })
      },
      homeSeries: function () {
        const self = this;
        self.seriesZero();
        axios
            .get('https://api.themoviedb.org/3/tv/on_the_air', {
              params: {
                api_key: '95d6ec199940a49c89273e717c71bedf',
              },
            })
            .then(function(the) {
                self.seriesList = the.data.results;
            })
      },
      seriesZero: function () {
        this.seriesList = [];
      },
      vote: function(movie) {
          return (Math.ceil(movie.vote_average / 2))
      }
    },
    mounted() {
      const self = this;
      self.homeMovies();
      self.homeSeries();
    }
});
Vue.config.devtools = true;
