let reducer = function(state, action) {

	switch (action.type) {
		case 'CHANGE_TAB':
			return Object.assign({}, state, {
				tab : action.tab,
			})

		// case 'REMOVE_PERSON':
		// 	return Object.assign({}, state, {
		// 		numberRemoved : state.numberRemoved + 1,
		// 		influencers: state.influencers.filter((influencer) => {
		// 			return influencer.id !== action.id
		// 		})
		// 	})

		// case 'MODAL_IS_OPEN':
		// 	return Object.assign({}, state, {
		// 		isModalOpen : !state.isModalOpen
		// 	})

		// case 'CHANGE_PAGE':
		// 	return Object.assign({}, state, {
		// 		currentPage : action.value
		// 	})

		// case 'RATED':
		// 	return Object.assign({}, state, {
		// 		rated : true
		// 	})
		

		default: return state;
	}
}

export default reducer