var GalleryItem= React.createClass({

	propTypes:{
		image: React.PropTypes.object.isRequired,
	},

	render : function(){
		return (
			React.createElement( 'div', {}, 
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('p', {}, this.props.image.title),
				React.createElement('p', {}, "age " + this.props.image.age),
				React.createElement('img', { src: this.props.image.src})

			)
		)
	},
});


var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png',
  title: "kotek lucek",
  age: 5
};

var element = React.createElement(GalleryItem, {image: image});

// var element= React.createElement(GalleryItem);
ReactDOM.render(element, document.getElementById('appThree'));