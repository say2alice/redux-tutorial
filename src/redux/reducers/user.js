export const userReducer = (state = '', action) => {
	if (action.type === 'updateUser') {
		return action.payload.user;
	} else {
		return state;
	}
	// return state;
}