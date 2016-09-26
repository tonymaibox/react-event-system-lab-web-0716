const React = require('react');

export default class Keypad extends React.Component {

	constructor(props){
		super(props);

		this.submit = this.submit.bind(this)
	}

	submit(){
		console.log('Entering password...')
	}

  render() {
  	return (
  		<input type="password" onKeyUp={this.submit}></input>
  	)
  }
};


module.exports = Keypad;