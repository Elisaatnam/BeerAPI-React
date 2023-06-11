import { Link } from "react-router-dom";
import "./SingleBeer.css";

const SingleBeer = props => {
	return (
		<article className='single-beer'>
			<div>
				<img src={props.img} alt='' />
			</div>
			<div>
				<h3>{props.title}</h3>
				<h4>{props.tagline}</h4>
				<Link to={`/allbeers/${props.ident}`}>Details</Link>
			</div>
		</article>
	);
};

export default SingleBeer;
