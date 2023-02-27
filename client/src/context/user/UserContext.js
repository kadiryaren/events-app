import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const initialState = { isLoading: false };

	const [state, dispatch] = useReducer(userReducer, initialState);

	const setLoadingTrue = () => {
		dispatch({
			type: "SET_LOADING_TRUE",
		});
	};

	return (
		<UserContext.Provider value={{ ...state, setLoadingTrue }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
