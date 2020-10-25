import { SET_INTEREST, SET_LOANAMT, SET_TENURE } from "../types";
export default (state, action) => {
	switch (action.type) {
		// Setting the interest rate
		case SET_INTEREST:
			return {
				...state,
				interestRate: action.payload,
			};
		//Setting the tenure
		case SET_TENURE:
			return {
				...state,
				tenure: action.payload,
			};
		//Setting the loan amount
		case SET_LOANAMT:
			return {
				...state,
				loanAmt: action.payload,
			};
		//Default case
		default:
			return state;
	}
};
