var GalleryItem= React.createClass({

	propTypes:{
		imageX: React.PropTypes.object.isRequired,
	},

	render : function(){
		return (
			React.createElement( 'div', {}, 
				React.createElement('h2', {}, this.props.imageX.name),
				React.createElement('img', { src: this.props.imageX.src})

			)
		)
	},
});


var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {imageX: image});

// var element= React.createElement(GalleryItem);
ReactDOM.render(element, document.getElementById('appThree'));




