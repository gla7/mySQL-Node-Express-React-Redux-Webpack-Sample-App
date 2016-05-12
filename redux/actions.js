let actions = {

	removePerson: function(id) {
		return {
			type : 'REMOVE_PERSON',
			id : id
		}
	},

	modalIsOpen: function() {
		return {
			type : 'MODAL_IS_OPEN',
			
		}
	},

	changePage: function(value) {
		return {
			type : 'CHANGE_PAGE',
			value : value
		}
	}
}

export default actions