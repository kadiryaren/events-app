import { createContext, useReducer, useEffect } from "react";
import userReducer from "./UserReducer";
import dummy from "../../dummy.json";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const initialState = { events: [], isLoading: false };

	const [state, dispatch] = useReducer(userReducer, initialState);

	const setLoadingTrue = () => {
		dispatch({
			type: "SET_LOADING_TRUE",
		});
	};

	const setLoadingFalse = () => {
		dispatch({
			type: "SET_LOADING_FALSE",
		});
	};

	const LoadData = async () => {
		setLoadingTrue();
		fetch("https://jsonplaceholder.typicode.com/todos/30")
			.then((response) => response.json())
			.then((json) => {
				dispatch({
					type: "LOAD_DATA",
					payload: dummy.events,
				});
			});
	};

	useEffect(() => {
		LoadData();
	}, []);

	return (
		<>
			{state.isLoading ? (
				<p>Loading...</p>
			) : (
				<UserContext.Provider value={{ ...state, setLoadingTrue }}>
					{children}
				</UserContext.Provider>
			)}
		</>
	);
};

export default UserContext;
