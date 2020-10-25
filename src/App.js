import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import Info from "./components/Info";
import LoanState from "./context/loan/LoanState";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
	return (
		<Router>
			<LoanState>
				<div className='app'>
					<Navbar />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<Main />
									<Info />
								</Fragment>
							)}
						/>
						<Route exact path='/about' component={About} />
					</Switch>
					<Footer />
				</div>
			</LoanState>
		</Router>
	);
}

export default App;
