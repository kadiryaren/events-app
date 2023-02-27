import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component";
import { Home } from "./pages";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
