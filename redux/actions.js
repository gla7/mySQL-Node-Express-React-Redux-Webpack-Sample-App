let actions = {

	changeTab: function(tab) {
		return {
			type : 'CHANGE_TAB',
			tab : tab
		}
	},

	// removePerson: function(id) {
	// 	return {
	// 		type : 'REMOVE_PERSON',
	// 		id : id
	// 	}
	// },

	// modalIsOpen: function() {
	// 	return {
	// 		type : 'MODAL_IS_OPEN',
			
	// 	}
	// },

	// changePage: function(value) {
	// 	return {
	// 		type : 'CHANGE_PAGE',
	// 		value : value
	// 	}
	// },

	// rated: function() {
	// 	return {
	// 		type : 'RATED',

	// 	}
	// }
}

export default actions