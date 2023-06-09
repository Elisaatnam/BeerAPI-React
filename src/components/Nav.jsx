import { Link } from "react-router-dom";
import "./Nav.css";
import beerIcon from "../assets/img/bier-96.png";

const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<img src={beerIcon} alt='back to home' />
			</Link>
		</nav>
	);
};

export default Nav;
