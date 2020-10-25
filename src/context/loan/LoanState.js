import React, { useReducer } from "react";
import LoanContext from "./loanContext";
import loanReducer from "./loanReducer";
import { SET_INTEREST, SET_LOANAMT, SET_TENURE, SET_ALL } from "../types";
const LoanState = (props) => {
	//Initial states
	const initialState = {
		loanAmt: 100000,
		interestRate: 0.0125,
		tenure: 240,
		emi: 1317,
		interestAmt: 216029,
		totalAmt: 316029,
	};
	const [state, dispatch] = useReducer(loanReducer, initialState);

	//Set Interest
	const setInterest = (intRate) => {
		dispatch({ type: SET_INTEREST, payload: intRate / 1200 });
	};
	//Set Tenure
	const setTenure = (years) => {
		dispatch({ type: SET_TENURE, payload: years * 12 });
	};
	//Set Loan Amount
	const setLoanAmt = (amt) => {
		dispatch({ type: SET_LOANAMT, payload: amt });
	};
	//Set EMI, Interest Amount and Total Amount
	const setAllItems = (interestRate, loanAmt, tenure) => {
		if (interestRate === 0) {
			var emi = 0;
			var totalAmt = loanAmt;
			var intAmt = 0;
		} else {
			emi = (
				loanAmt *
				((interestRate * Math.pow(1 + interestRate, tenure)) /
					(Math.pow(1 + interestRate, tenure) - 1))
			).toFixed(0);
			totalAmt = (emi * tenure).toFixed(0);
			intAmt = (totalAmt - loanAmt).toFixed(0);
		}
		dispatch({
			type: SET_ALL,
			payload: {
				emi,
				totalAmt,
				intAmt,
			},
		});
	};
	return (
		<LoanContext.Provider
			value={{
				loanAmt: state.loanAmt,
				interestRate: state.interestRate,
				tenure: state.tenure,
				emi: state.emi,
				interestAmt: state.interestAmt,
				totalAmt: state.totalAmt,
				setInterest,
				setTenure,
				setLoanAmt,
				setAllItems,
			}}
		>
			{props.children}
		</LoanContext.Provider>
	);
};
export default LoanState;
