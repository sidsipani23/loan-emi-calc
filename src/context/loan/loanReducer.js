import { SET_INTEREST, SET_LOANAMT, SET_TENURE, SET_ALL } from "../types";
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
		//Setting all the components
		case SET_ALL:
			return {
				...state,
				emi: action.payload.emi,
				interestAmt: action.payload.intAmt,
				totalAmt: action.payload.totalAmt,
			};
		//Default case
		default:
			return state;
	}
};
