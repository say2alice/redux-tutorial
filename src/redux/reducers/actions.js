
// actionCreate()이용 동적으로 payLoad 구성
// export const action = {
// 	type: 'updateUser',
// 	payLoad: {
// 		user: 'Tom'
// 	}
// }

// {
// 	type: 'updateUser',
// 		user:{name:'Jane'}
// }
export const updateUser = (name) => ({
	type: 'updateUser',
	payLoad: {
		user: name
	}
});