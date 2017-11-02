
export function selectBook(book) {
	//selectBook is an action and should return an action, an object with a type(always done with capital letters and underscores) and sometimes a payload property
	return {
		type: 'BOOK_SELECTED',
		payload: book

	};
}
