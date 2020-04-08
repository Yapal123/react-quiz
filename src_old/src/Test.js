import React from 'react';

class Test extends React.Component{
	constructor(props){
		super(props)
		this.click = this.click.bind(this);
	}

	click(){
		this.props.func('123');
	}

	render(){
		return(
				<button onClick={this.click}>test</button>
			)
	}
}

export default Test;