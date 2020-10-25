import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import LoanContext from "../../context/loan/loanContext";
const Graph = () => {
	const loanContext = useContext(LoanContext);
	const { loanAmt, interestRate, tenure } = loanContext;
	const data = {
		labels: ["Principal Amount", "Interest Amount"],
		datasets: [
			{
				data: [
					loanAmt,
					//Interest Amount
					(
						(
							loanAmt *
							((interestRate * Math.pow(1 + interestRate, tenure)) /
								(Math.pow(1 + interestRate, tenure) - 1))
						).toFixed(0) *
							tenure -
						loanAmt
					).toFixed(0),
				],
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
					<b>
						₹{/* EMI calculation */}
						{isNaN(
							(
								loanAmt *
								((interestRate * Math.pow(1 + interestRate, tenure)) /
									(Math.pow(1 + interestRate, tenure) - 1))
							).toFixed(0)
						)
							? 0
							: (
									loanAmt *
									((interestRate * Math.pow(1 + interestRate, tenure)) /
										(Math.pow(1 + interestRate, tenure) - 1))
							  ).toFixed(0)}
					</b>
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
					<b>
						₹ {/* Interest Amount= EMI*tenure-Loan Amount */}
						{isNaN(
							(
								(
									loanAmt *
									((interestRate * Math.pow(1 + interestRate, tenure)) /
										(Math.pow(1 + interestRate, tenure) - 1))
								).toFixed(0) *
									tenure -
								loanAmt
							).toFixed(0)
						)
							? 0
							: (
									(
										loanAmt *
										((interestRate * Math.pow(1 + interestRate, tenure)) /
											(Math.pow(1 + interestRate, tenure) - 1))
									).toFixed(0) *
										tenure -
									loanAmt
							  ).toFixed(0)}
					</b>
				</span>
				<br />
				<br />
				Total Amount Payable
				<br />
				<span style={{ fontSize: "1.5rem" }}>
					<b>
						₹ {/* Total Amount= Interest Amount + Principal Amount */}
						{isNaN(
							(
								(
									loanAmt *
									((interestRate * Math.pow(1 + interestRate, tenure)) /
										(Math.pow(1 + interestRate, tenure) - 1))
								).toFixed(0) * tenure
							).toFixed(0)
						)
							? loanAmt
							: (
									(
										loanAmt *
										((interestRate * Math.pow(1 + interestRate, tenure)) /
											(Math.pow(1 + interestRate, tenure) - 1))
									).toFixed(0) * tenure
							  ).toFixed(0)}
					</b>
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
