import { useEffect, useState } from "react";
import SingleBeer from "../components/SingleBeer";
import Nav from "../components/Nav";
import "./AllBeers.css";

const AllBeers = () => {
	const [beerData, setBeerData] = useState([]);

	useEffect(() => {
		fetch("https://ih-beers-api2.herokuapp.com/beers")
			.then(res => res.json())
			.then(beerData => setBeerData(beerData))
			.catch(err => console.log("Fehler: ", err));
	}, []);

	return (
		<>
			<div className='beers-overview'>
				{beerData.map((elm, i) => (
					<section key={i}>
						<SingleBeer
							img={elm.image_url}
							title={elm.name}
							tagline={elm.tagline}
							ident={elm._id}
						/>
					</section>
				))}
			</div>
			<Nav />
		</>
	);
};

export default AllBeers;
