const userReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING_TRUE":
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};

export default userReducer;
