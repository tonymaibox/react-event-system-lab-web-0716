const React = require('react');

export default class EyesOnMe extends React.Component {

	constructor(props){
		super(props);

		this.focus = this.focus.bind(this);
		this.blur = this.blur.bind(this);
	}

	focus(){
		console.log('Good!')
	}

	blur(){
		console.log('Hey! Eyes on me!')
	}

  render() {
  	return (
  		<button onFocus={this.focus} onBlur={this.blur}></button>
  	)
  }
};


module.exports = EyesOnMe;