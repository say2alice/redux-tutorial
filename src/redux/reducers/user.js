export const userReducer = (state = '', action) => {
	if (action.type === 'updateUser') {
		return action.payLoad.user;
	} else {
		return state;
	}
}