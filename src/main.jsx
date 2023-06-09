import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBeers from "./pages/AllBeers.jsx";
import SingleBeerDetail from "./pages/SingleBeerDetail.jsx";
import RandomBeer from "./pages/RandomBeer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/allbeers' element={<AllBeers />} />
				<Route path='/allbeers/:id' element={<SingleBeerDetail />} />
				<Route path='/randombeer' element={<RandomBeer />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
