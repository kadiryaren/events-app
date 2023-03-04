import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component";
import EventList from "./component/EventList/EventList";
import UserContext from "./context/user/UserContext";
import { About, CalenderPage, Events, Home } from "./pages";
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage";

function App() {
	const { isLoading } = useContext(UserContext);

	return (
		<div className="App ">
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
					<Route
						path="/calender"
						element={<CalenderPage />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/events"
						element={<Events />}
					/>
					<Route
						path="/events/:date"
						element={<EventList />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
