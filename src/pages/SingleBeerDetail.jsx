import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Nav from "../components/Nav";
import "./SingleBeerDetail.css";
import backImg from "../assets/img/back.png";

const SingleBeerDetail = () => {
	const params = useParams();
	const [detail, setDetail] = useState({});
	useEffect(() => {
		fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
			.then(res => res.json())
			.then(detail => setDetail(detail))
			.catch(err => console.log("Fehler: ", err));
	}, []);

	return (
		<>
			<section className='detail-page'>
				<img src={detail.image_url} alt={detail.name} />
				<h1>{detail.name}</h1>
				<h4>{detail.tagline}</h4>
				<div>
					<p>First brewed:</p>
					<p>{detail.first_brewed}</p>
				</div>
				<div>
					<p>Attenuation Level:</p>
					<p>{detail.attenuation_level}</p>
				</div>
				<h5>{detail.description}</h5>
				<Link to='/allbeers'>
					<img src={backImg} alt='Go back' />
				</Link>
				<Nav />
			</section>
		</>
	);
};

export default SingleBeerDetail;
