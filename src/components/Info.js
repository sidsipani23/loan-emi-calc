import React from "react";

const Info = () => {
	//Data file for static data to be shown
	return (
		<div class='container'>
			<div className='card-panel '>
				<h5>What is a Home Loan EMI and it's calculator?</h5>
				<p>
					EMI stands for Equated Monthly Instalment. EMI is the monthly
					repayment that a home loan borrower must make to repay the home loan
					within the specified loan tenor. <br />A home loan calculator helps
					you know the amount of EMIs that you will need to pay towards your
					Home Loan and helps make an informed decision.
				</p>
				<h5>How is EMI calcuated?</h5>
				<p>
					The mathematical formula for calculating EMIs is = [P x R x
					(1+R)^N]/[(1+R)^N-1] where:
					<ul>
						<li>
							<b>‘P’</b> represents the loan amount or principal
						</li>
						<li>
							<b>‘N’</b> is the number of monthly instalments
						</li>
						<li>
							<b>‘R’</b> is the interest rate per month. Therefore, if the rate
							of interest per annum is 11%, then the value of ‘R’ will be 11/(12
							x 100)
						</li>
					</ul>
				</p>
			</div>
			<br />
			<h4 class='text-darken-2 center-align'>
				<b>
					<span style={{ color: "#87431d" }}>Frequently Asked Questions</span>
				</b>
			</h4>
			<div className='card-panel'>
				<h5>What are the advantages of using a Home Loan EMI Calculator?</h5>
				<p>
					A home loan EMI calculator helps you to decide whether you can afford
					the financial commitment of a home loan in the long term. If you want,
					you can increase or decrease your EMI amount depending on the amount
					of loan you are taking and the time period for which you'll be paying
					the EMIs.
				</p>
				<h5>Who can apply for a home loan?</h5>
				<p>
					Salaried individuals (working in government and private sector) <br />
					Professionals (i.e. doctors, engineers, dentists, architects,
					chartered accountants, cost accountants, company secretary, management
					consultants, etc.) <br />
					Self-employed in business and filing Income-Tax Returns <br />
					Individuals over 21 years of age and ideally not over 60-65 years.
				</p>
				<h5>How much is the minimum borrowing under a home loan?</h5>
				<p>The minimum borrowing under the home loan is Rs 1 lakh.</p>
				<h5>Is there any tax benefit when you avail a home loan?</h5>
				<p>
					Yes, there are tax benefits of availing a home loan. The principal
					portion of your home loan EMI is eligible for a deduction under
					Section 80C of the Income-tax Act, 1961, subject to a maximum limit of
					Rs 1.50 lakh.
					<br />
					If you are a “first-time home buyer”, you can even claim an additional
					deduction upto Rs 50,000 under Section 80EE (subject to certain
					conditions). This additional deduction can be availed after first
					exhausting the limit under Section 24(b) for the interest portion.
					<br />
					Section 24(b) of the Income-tax Act, 1961, allows a deduction for the
					interest component of the home loan EMI. For a self-occupied property,
					the deduction under Section 24(b) is Rs 2.00 lakh per annum.
					<br /> And in case the house is let-out on rent, i.e. it is a Let-Out
					Property (LOP), the actual interest payable is eligible for deduction
					under Section 24(b), thereby not being subject to any maximum limit.
					<br />
					Do note, if you have taken a loan for the purpose of reconstructing,
					repairing or renovating the property, the amount of deduction you are
					eligible for under Section 24(b) will be restricted to Rs 30,000,
					irrespective whether you want to stay in it or let it out on rent.
				</p>
			</div>
		</div>
	);
};

export default Info;
