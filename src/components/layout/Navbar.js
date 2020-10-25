import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav>
			<div className='nav-wrapper' style={{ backgroundColor: "#87431d" }}>
				<Link
					to='/'
					className='brand-logo center'
					style={{ fontFamily: "Anton sans-serif", color: "#ffe05d" }}
				>
					<i className='fas fa-calculator'></i>Loan EMI Calculator
				</Link>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<Link
							to='/'
							style={{
								fontFamily: "Montserrat sans-serif",
								fontSize: "1.5rem",
							}}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							style={{
								fontFamily: "Montserrat sans-serif",
								fontSize: "1.5rem",
							}}
						>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
