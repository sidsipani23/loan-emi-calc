import React from "react";
import logo from "../Siddhartha_Profile.jpg";
const About = () => {
	return (
		<div class='container center-align'>
			<img
				src={logo}
				alt='_profilePic'
				style={{
					height: "380px",
					width: "280px",
					borderRadius: "25px",
					paddingTop: "10px",
				}}
			/>
			<p style={{ fontSize: "15px" }}>
				A Computer Science and Engineering graduate running primarily on ☕.
				<br />
				Also, has an active interest and passion for Front End Web Development,
				mainly using React.js, JavaScript, CSS and HTML.
			</p>
			<div className='container center-align' style={{ paddingTop: "3rem" }}>
				<h5>
					MADE WITH {"</>"} AND <span role='img'>💖</span> USING REACT.JS{" "}
				</h5>
			</div>
		</div>
	);
};

export default About;
