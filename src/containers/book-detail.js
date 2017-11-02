import React, { Component } from 'react';
import { Connect } from 'react-redux';

class BookDetail extends Component {
	render () {
		return (
			<div>BookDetail</div>

		);
	}
}

function mapStateToProps(state){
	//whatever is returned shows up as props inside BookList
	return {
		book: state.activebook
	}
}

export default connect(mapStateToProps, BookDetail);
