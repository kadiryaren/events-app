const userReducer = (state, action) => {
	switch (action.type) {
		case "LOAD_DATA":
			return {
				events: [...action.payload],
				isLoading: false,
			};

		case "SET_LOADING_TRUE":
			return {
				...state,
				isLoading: true,
			};
		case "SET_LOADING_FALSE":
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
