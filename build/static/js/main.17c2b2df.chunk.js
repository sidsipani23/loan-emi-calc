(this["webpackJsonploan-emi-calc"]=this["webpackJsonploan-emi-calc"]||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(51),o=a.n(r),c=(a(61),a(12)),i=a(1),m=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper",style:{backgroundColor:"#87431d"}},l.a.createElement(c.b,{to:"/",className:"brand-logo center",style:{fontFamily:"Anton sans-serif",color:"#ffe05d"}},l.a.createElement("i",{className:"fas fa-calculator"}),"Loan EMI Calculator"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/",style:{fontFamily:"Montserrat sans-serif",fontSize:"1.5rem"}},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about",style:{fontFamily:"Montserrat sans-serif",fontSize:"1.5rem"}},"About")))))},s=a(53),u=Object(n.createContext)(),E=function(){var e=Object(n.useContext)(u),t=e.loanAmt,a=e.interestRate,r=e.tenure,o={labels:["Principal Amount","Interest Amount"],datasets:[{data:[t,((t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0)*r-t).toFixed(0)],backgroundColor:["#db6400","#16697a"]}]};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 left",style:{fontSize:"1rem",color:"#333333"}},"Monthly Home Loan EMI",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"2rem",color:"#bb2205"}},l.a.createElement("b",null,"\u20b9",isNaN((t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0))?0:(t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0))),l.a.createElement("br",null),l.a.createElement("br",null),"Principal Amount",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"1.5rem",color:"#db6400"}},l.a.createElement("b",null,"\u20b9 ",t)),l.a.createElement("br",null),l.a.createElement("br",null),"Interest Amount",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"1.5rem",color:"#16697a"}},l.a.createElement("b",null,"\u20b9 ",isNaN(((t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0)*r-t).toFixed(0))?0:((t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0)*r-t).toFixed(0))),l.a.createElement("br",null),l.a.createElement("br",null),"Total Amount Payable",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"1.5rem"}},l.a.createElement("b",null,"\u20b9 ",isNaN(((t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0)*r).toFixed(0))?t:((t*(a*Math.pow(1+a,r)/(Math.pow(1+a,r)-1))).toFixed(0)*r).toFixed(0)))),l.a.createElement("div",{className:"col s6 right",style:{paddingLeft:"1.75rem"}},l.a.createElement(s.Pie,{data:o,options:{maintainAspectRatio:!1},width:300,height:275})))},d=function(){var e=Object(n.useContext)(u),t=e.loanAmt,a=e.tenure,r=e.interestRate,o=e.setInterest,c=e.setTenure,i=e.setLoanAmt;e.setAllItems;return l.a.createElement("form",null,l.a.createElement("p",{className:"range-field"},l.a.createElement("label",{htmlFor:"loanAmt",style:{fontSize:"1rem",color:"#333333"}},"LOAN AMOUNT",l.a.createElement("span",{className:"right"},l.a.createElement("b",null,l.a.createElement("u",null,"\u20b9 ",t)))),l.a.createElement("input",{type:"range",id:"loanAmt",min:"100000",max:"100000000",step:"1",onChange:function(e){i(e.target.value),e.preventDefault()}}),"\u20b9 1 Lakh",l.a.createElement("span",{className:"right"},"\u20b9 10 crore")),l.a.createElement("p",{className:"range-field",style:{marginTop:"3rem"}},l.a.createElement("label",{htmlFor:"tenure",style:{fontSize:"1rem",color:"#333333"}},"TENURE (YEARS)",l.a.createElement("span",{className:"right"},l.a.createElement("b",null,l.a.createElement("u",null,a/12)))),l.a.createElement("input",{type:"range",id:"tenure",min:"1",max:"30",onChange:function(e){c(e.target.value),e.preventDefault()},defaultValue:"20"}),"1",l.a.createElement("span",{className:"right"},"30")),l.a.createElement("p",{className:"range-field",style:{marginTop:"3rem"}},l.a.createElement("label",{htmlFor:"interestRate",style:{fontSize:"1rem",color:"#333333"}},"INTEREST RATE (% Per Annum)",l.a.createElement("span",{className:"right"},l.a.createElement("b",null,l.a.createElement("u",null,(1200*r).toFixed(2)," %")))),l.a.createElement("input",{type:"range",id:"interestRate",min:"0",max:"15",step:"0.05",onChange:function(e){o(e.target.value),e.preventDefault()},defaultValue:"15"}),"0",l.a.createElement("span",{className:"right"},"15")))},h=function(){return l.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left col s5"},l.a.createElement(d,null)),l.a.createElement("div",{className:"right col s5"},l.a.createElement(E,null))),l.a.createElement("br",null))},p=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card-panel "},l.a.createElement("h5",null,"What is a Home Loan EMI and it's calculator?"),l.a.createElement("p",null,"EMI stands for Equated Monthly Instalment. EMI is the monthly repayment that a home loan borrower must make to repay the home loan within the specified loan tenor. ",l.a.createElement("br",null),"A home loan calculator helps you know the amount of EMIs that you will need to pay towards your Home Loan and helps make an informed decision."),l.a.createElement("h5",null,"How is EMI calcuated?"),l.a.createElement("p",null,"The mathematical formula for calculating EMIs is = [P x R x (1+R)^N]/[(1+R)^N-1] where:",l.a.createElement("b",null,"\u2018P\u2019")," represents the loan amount or principal",l.a.createElement("br",null),l.a.createElement("b",null,"\u2018N\u2019")," is the number of monthly instalments",l.a.createElement("br",null),l.a.createElement("b",null,"\u2018R\u2019")," is the interest rate per month. Therefore, if the rate of interest per annum is 11%, then the value of \u2018R\u2019 will be 11/(12 x 100)")),l.a.createElement("br",null),l.a.createElement("h4",{className:"text-darken-2 center-align"},l.a.createElement("b",null,l.a.createElement("span",{style:{color:"#87431d"}},"Frequently Asked Questions"))),l.a.createElement("div",{className:"card-panel"},l.a.createElement("h5",null,"What are the advantages of using a Home Loan EMI Calculator?"),l.a.createElement("p",null,"A home loan EMI calculator helps you to decide whether you can afford the financial commitment of a home loan in the long term. If you want, you can increase or decrease your EMI amount depending on the amount of loan you are taking and the time period for which you'll be paying the EMIs."),l.a.createElement("h5",null,"Who can apply for a home loan?"),l.a.createElement("p",null,"Salaried individuals (working in government and private sector) ",l.a.createElement("br",null),"Professionals (i.e. doctors, engineers, dentists, architects, chartered accountants, cost accountants, company secretary, management consultants, etc.) ",l.a.createElement("br",null),"Self-employed in business and filing Income-Tax Returns ",l.a.createElement("br",null),"Individuals over 21 years of age and ideally not over 60-65 years."),l.a.createElement("h5",null,"How much is the minimum borrowing under a home loan?"),l.a.createElement("p",null,"The minimum borrowing under the home loan is Rs 1 lakh."),l.a.createElement("h5",null,"Is there any tax benefit when you avail a home loan?"),l.a.createElement("p",null,"Yes, there are tax benefits of availing a home loan. The principal portion of your home loan EMI is eligible for a deduction under Section 80C of the Income-tax Act, 1961, subject to a maximum limit of Rs 1.50 lakh.",l.a.createElement("br",null),"If you are a \u201cfirst-time home buyer\u201d, you can even claim an additional deduction upto Rs 50,000 under Section 80EE (subject to certain conditions). This additional deduction can be availed after first exhausting the limit under Section 24(b) for the interest portion.",l.a.createElement("br",null),"Section 24(b) of the Income-tax Act, 1961, allows a deduction for the interest component of the home loan EMI. For a self-occupied property, the deduction under Section 24(b) is Rs 2.00 lakh per annum.",l.a.createElement("br",null)," And in case the house is let-out on rent, i.e. it is a Let-Out Property (LOP), the actual interest payable is eligible for deduction under Section 24(b), thereby not being subject to any maximum limit.",l.a.createElement("br",null),"Do note, if you have taken a loan for the purpose of reconstructing, repairing or renovating the property, the amount of deduction you are eligible for under Section 24(b) will be restricted to Rs 30,000, irrespective whether you want to stay in it or let it out on rent.")))},f=a(55),b=a(10),y=function(e,t){switch(t.type){case"SET_INTEREST":return Object(b.a)(Object(b.a)({},e),{},{interestRate:t.payload});case"SET_TENURE":return Object(b.a)(Object(b.a)({},e),{},{tenure:t.payload});case"SET_LOANAMT":return Object(b.a)(Object(b.a)({},e),{},{loanAmt:t.payload});default:return e}},g=function(e){var t=Object(n.useReducer)(y,{loanAmt:1e5,interestRate:.0125,tenure:240}),a=Object(f.a)(t,2),r=a[0],o=a[1];return l.a.createElement(u.Provider,{value:{loanAmt:r.loanAmt,interestRate:r.interestRate,tenure:r.tenure,setInterest:function(e){o({type:"SET_INTEREST",payload:e/1200})},setTenure:function(e){o({type:"SET_TENURE",payload:12*e})},setLoanAmt:function(e){o({type:"SET_LOANAMT",payload:e})}}},e.children)},v=a(54),N=a.n(v),w=function(){return l.a.createElement("div",{className:"container center-align"},l.a.createElement("img",{src:N.a,alt:"_profilePic",style:{height:"380px",width:"280px",borderRadius:"25px",paddingTop:"10px"}}),l.a.createElement("p",{style:{fontSize:"15px"}},"A Computer Science and Engineering graduate running primarily on \u2615.",l.a.createElement("br",null),"Also, has an active interest and passion for Front End Web Development, mainly using React.js, JavaScript, CSS and HTML."),l.a.createElement("div",{className:"container center-align",style:{paddingTop:"3rem"}},l.a.createElement("h5",null,"MADE WITH ","</>"," AND ",l.a.createElement("span",{role:"img"},"\ud83d\udc96")," USING REACT.JS"," ")))},x=function(){return l.a.createElement("div",{className:"container center-align"},l.a.createElement("footer",null,l.a.createElement("span",{role:"img"},"\xa9\ufe0f"),l.a.createElement("b",null,"Siddhartha Sipani, 2020.")))};var S=function(){return l.a.createElement(c.a,null,l.a.createElement(g,null,l.a.createElement("div",{className:"app"},l.a.createElement(m,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement(p,null))}}),l.a.createElement(i.a,{exact:!0,path:"/about",component:w})),l.a.createElement(x,null))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/Siddhartha_Profile.ffd071a7.jpg"},56:function(e,t,a){e.exports=a(161)},61:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.17c2b2df.chunk.js.map