import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import LoanContext from "../../context/loan/loanContext";
const Graph = () => {
	const loanContext = useContext(LoanContext);
	const { loanAmt, emi, totalAmt, interestAmt } = loanContext;
	const data = {
		labels: ["Principal Amount", "Interest Amount"],
		datasets: [
			{
				data: [loanAmt, interestAmt],
				backgroundColor: ["#db6400", "#16697a"],
			},
		],
	};
	return (
		<div className='row'>
			{/* Left Side of the Graph section */}
			<div
				className='col s6 left'
				style={{ fontSize: "1rem", color: "#333333" }}
			>
				Monthly Home Loan EMI
				<br />
				<span style={{ fontSize: "2rem", color: "#bb2205" }}>
					<b>₹ {emi}</b>
				</span>
				<br />
				<br />
				Principal Amount
				<br />
				<span style={{ fontSize: "1.5rem", color: "#db6400" }}>
					<b>₹ {loanAmt}</b>
				</span>
				<br />
				<br />
				Interest Amount
				<br />
				<span style={{ fontSize: "1.5rem", color: "#16697a" }}>
					<b>₹ {interestAmt}</b>
				</span>
				<br />
				<br />
				Total Amount Payable
				<br />
				<span style={{ fontSize: "1.5rem" }}>
					<b>₹ {totalAmt}</b>
				</span>
			</div>
			{/* Right side of the graph section */}
			<div className='col s6 right' style={{ paddingLeft: "1.75rem" }}>
				<Pie
					data={data}
					options={{
						maintainAspectRatio: false,
					}}
					width={300}
					height={275}
				/>
			</div>
		</div>
	);
};

export default Graph;
