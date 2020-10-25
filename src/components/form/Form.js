import React, { useContext } from "react";
import LoanContext from "../../context/loan/loanContext";
const Form = () => {
	const loanContext = useContext(LoanContext);
	const {
		loanAmt,
		tenure,
		interestRate,
		setInterest,
		setTenure,
		setLoanAmt,
		setAllItems,
	} = loanContext;

	return (
		<form>
			<p className='range-field'>
				<label htmlFor='loanAmt' style={{ fontSize: "1rem", color: "#333333" }}>
					LOAN AMOUNT
					<span className='right'>
						<b>
							<u>₹ {loanAmt}</u>
						</b>
					</span>
				</label>

				<input
					type='range'
					id='loanAmt'
					min='100000'
					max='100000000'
					step='1'
					onChange={(e) => {
						//Setting the loan Amount and all other components
						setLoanAmt(e.target.value);
						setAllItems(interestRate, loanAmt, tenure);
						e.preventDefault();
					}}
				/>
				{"₹ 1 Lakh"}
				<span className='right'>{"₹ 10 crore"}</span>
			</p>
			<p className='range-field' style={{ marginTop: "3rem" }}>
				<label htmlFor='tenure' style={{ fontSize: "1rem", color: "#333333" }}>
					TENURE (YEARS)
					<span className='right'>
						<b>
							<u>{tenure / 12}</u>
						</b>
					</span>
				</label>
				<input
					type='range'
					id='tenure'
					min='1'
					max='30'
					onChange={(e) => {
						//Setting the tenure and all other components
						setTenure(e.target.value);
						setAllItems(interestRate, loanAmt, tenure);

						e.preventDefault();
					}}
					defaultValue='20'
				/>
				{"1"}
				<span className='right'>{"30"}</span>
			</p>
			<p className='range-field' style={{ marginTop: "3rem" }}>
				<label
					htmlFor='interestRate'
					style={{ fontSize: "1rem", color: "#333333" }}
				>
					INTEREST RATE (% Per Annum)
					<span className='right'>
						<b>
							<u>{(interestRate * 1200).toFixed(2)} %</u>
						</b>
					</span>
				</label>
				<input
					type='range'
					id='interestRate'
					min='0'
					max='15'
					step='0.05'
					onChange={(e) => {
						//Setting the interest Rate and all other components
						setInterest(e.target.value);

						setAllItems(interestRate, loanAmt, tenure);
						e.preventDefault();
					}}
					defaultValue='15'
				/>
				{"0"}
				<span className='right'>{"15"}</span>
			</p>
		</form>
	);
};

export default Form;
