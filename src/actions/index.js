import React from 'react';
import { connect } from 'react-redux';

function selectBook(book) {
	console.log('A book has been selected', book.title);
}