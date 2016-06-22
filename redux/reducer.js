let reducer = function(state, action) {

	switch (action.type) {
		case 'CHANGE_TAB':
			return Object.assign({}, state, {
				tab : action.tab,
			})

		default: return state;
	}
}

export default reducer