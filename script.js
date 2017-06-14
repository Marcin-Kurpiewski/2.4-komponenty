var element= React.createElement("div", {} , "Hello World!");

ReactDOM.render(element, document.getElementById('app'));

var elementOne=
React.createElement('div',{},
	React.createElement("h1", {}, "Lista filmów"),
	React.createElement("ul",{},
		React.createElement("li",{},
			React.createElement('h2', {}, "Harry Potter"),
			React.createElement("p", {} , "Film o czarodzieju")
			),
		React.createElement('li', {} ,
			React.createElement("h2", {}, "Król Lew"),
			React.createElement("p", {}, "Film opowiadający historię króla sawanny")
			)
		)
);

ReactDOM.render(elementOne, document.getElementById('appOne'));


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

var moviesElements= movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, "Tytuł: " , movie.title),
      React.createElement('p', {}, "Krótki opis: ", movie.desc),
      React.createElement('img', {src:movie.images, className: 'movies_images'}, )
    );
});

var elementTwo=
	React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(elementTwo, document.getElementById('appTwo'));


// var Movie = React.createClass({

// propTypes:{
//   id: React.PropTypes.object.isRequired,
// },
//   render : function(){

//     return(
//       React.createElement('li', {key: movie.id},
//       React.createElement('h2', {}, "Tytuł: " , this.props.movie.title),
//       React.createElement('p', {}, "Krótki opis: ", this.proprs.movie.desc),
//       React.createElement('img', {src: this.props.movie.images, className: 'movies_images'}, )
//       )
//   }
// });

//     var el = React.createElement(Movie, {movie:movies});

//     ReactDOM.render(el, document.getElementById('appFour'));