let reducer = function(state, action) {

	switch (action.type) {
		case 'REMOVE_PERSON':
			return Object.assign({}, state, {
				numberRemoved : state.numberRemoved + 1,
				influencers: state.influencers.filter((influencer) => {
					return influencer.id !== action.id
				})
			})

		case 'MODAL_IS_OPEN':
			return Object.assign({}, state, {
				isModalOpen : !state.isModalOpen
			})

		case 'CHANGE_PAGE':
			return Object.assign({}, state, {
				currentPage : action.value
			})
		

		default: return state;
	}
}

export default reducer