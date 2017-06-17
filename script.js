var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    images: "./images/harry_potter.jpg"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    images: "./images/krol_lew.jpg"
  },
  {
    id: 3,
    title: 'Dexter',
    desc: 'Rzeźnik z Los Angeles, serial kryminalny',
    images: "./images/dexter.jpg"
  },
  {
    id: 4,
    title: 'Piraci z Karaibów',
    desc: 'Szalony pirat w boju',
    images: "./images/piraci.jpg"
  },
  {
    id: 5,
    title: 'Policjanci z Miami',
    desc: 'Amerykańska policja w akcji',
    images: "./images/Policjanci.jpg"
  },
  {
    id: 6,
    title: 'Prison Break',
    desc: 'Szybki plan na ucieczkę z więzienia',
    images: "./images/prison-break.jpg"
  },
  {
    id: 7,
    title: 'Rambo',
    desc: 'Niepokonany Rambo w akcji',
    images: "./images/rambo.jpg"
  },
  {
    id: 8,
    title: 'Rodzina Soprano',
    desc: 'Pieniądze, Broń, Narkotyki i Kobiety',
    images: "./images/soprano.jpg"
  }
];

var Movies = React.createClass({
  propTypes: {
    moviesX: React.PropTypes.array.isRequired,
  },
  
  render: function(){
    var movies = this.props.moviesX.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movieX: movie})
    });

    return (
      React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, movies)
      )
    );
  },
});

var Movie = React.createClass({
  propTypes: {
    movieX: React.PropTypes.object.isRequired,
  },

  render: function() {
    return React.createElement('li', {},
      React.createElement(MovieTitle, {titleX: this.props.movieX.title}),
      React.createElement(MovieDescription, {descX: this.props.movieX.desc}),
      React.createElement(MovieImage, {srcX: this.props.movieX.images})
    )
  }
})

var MovieTitle = React.createClass({
  propTypes:{
    titleX: React.PropTypes.string.isRequired,
  },
  
  render: function(){
    return (
      React.createElement('h2', {}, "Tytuł: ", this.props.titleX) 
    );
  },
});

var MovieDescription = React.createClass({
  propTypes:{
    descX: React.PropTypes.string.isRequired,
  },
  
  render: function(){
    return (
      React.createElement('p', {}, "Krótki opis: ", this.props.descX) 
    );
  },
});

var MovieImage = React.createClass({
  propTypes:{
    srcX: React.PropTypes.string.isRequired,
  },
  
  render: function(){
    return (
      React.createElement('img', {src: this.props.srcX, className: 'movies_images'}) 
    );
  },
});

ReactDOM.render(React.createElement(Movies, {moviesX: movies}), document.getElementById('appFour'));