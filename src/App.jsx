import { Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
	return (
		<div className='wrapper'>
			<Link to='/allbeers'>
				<section className='all-beers'>
					<div className='img-div'></div>
					<h2>All Beers</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
						illum eveniet delectus velit quis itaque, sunt nihil provident
					</p>
				</section>
			</Link>
			<Link to='/randombeer'>
				<section className='random-beer'>
					<div className='img-div2'></div>
					<h2>Random Beer</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
						illum eveniet delectus velit quis itaque, sunt nihil provident
					</p>
				</section>
			</Link>
			<Nav />
		</div>
	);
}

export default App;
