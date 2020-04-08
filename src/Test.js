import React from 'react';

class Test extends React.Component {
	constructor(props) {
		super(props)
		this.change = this.change.bind(this);
	}

	componentDidMount() {
		console.log('mounted');
	}

	change(e) {
		this.props.func(e.target.value, this.props.step);
	}

	render() {
		const radioArr = this.props.radios;
		const radio = radioArr.map((el, index) =>
			<div className="form-check form-check-inline" key={index.toString()}>


				<input type="radio" value={el.pts} name="questions" onChange={this.change} className="form-check-input" id={index} />

				<label className="form-check-label" htmlFor={index}>{el.answ}
				</label>


			</div>
		);
		console.log(this.props.radios);
		return (
			<div className="wrapper_answer">{radio}</div>
		)
	}
}

export default Test;
