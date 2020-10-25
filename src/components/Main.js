import React from "react";
import Graph from "./graphs/Graph";
import Form from "./form/Form";
const Main = () => {
	return (
		//Combines the Form and Graph component into one.
		<div className='container' style={{ marginTop: "3rem" }}>
			<div className='row'>
				<div className='left col s5'>
					<Form />
				</div>
				<div className='right col s5'>
					<Graph />
				</div>
			</div>
			<br />
		</div>
	);
};

export default Main;
