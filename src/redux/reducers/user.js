export const userReducer = (state = '', action) => {
	switch (action.type) {
		case 'updateUser':
			return action.payLoad
		default :
			return state
	}
	// return state;
}