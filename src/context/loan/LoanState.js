import React, { useReducer } from "react";
import LoanContext from "./loanContext";
import loanReducer from "./loanReducer";
import { SET_INTEREST, SET_LOANAMT, SET_TENURE } from "../types";
const LoanState = (props) => {
	//Initial states
	const initialState = {
		loanAmt: 100000,
		interestRate: 0.0125,
		tenure: 240,
	};
	const [state, dispatch] = useReducer(loanReducer, initialState);

	//Set Interest
	const setInterest = (intRate) => {
		dispatch({
			type: SET_INTEREST,
			payload: intRate / 1200,
		});
	};
	//Set Tenure
	const setTenure = (years) => {
		dispatch({ type: SET_TENURE, payload: years * 12 });
	};
	//Set Loan Amount
	const setLoanAmt = (amt) => {
		dispatch({ type: SET_LOANAMT, payload: amt });
	};

	return (
		<LoanContext.Provider
			value={{
				loanAmt: state.loanAmt,
				interestRate: state.interestRate,
				tenure: state.tenure,
				setInterest,
				setTenure,
				setLoanAmt,
			}}
		>
			{props.children}
		</LoanContext.Provider>
	);
};
export default LoanState;
