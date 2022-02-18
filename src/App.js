import React from "react"

import JobListings from "./components/JobListings"

function App() {
	return (
		<React.Fragment>
			<div className="bg-header">
				<img src="./images/bg-header-desktop.svg" alt="" className="desktop"/>
				<img src="./images/bg-header-mobile.svg" alt="" className="mobile"/>
			</div>

			<div className="container">
				<JobListings/>
			</div>	

			<footer>
				<div className="attribution">
					Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
					Coded by <a href="https://github.com/simoneclr">Simone Calciolari</a>.
				</div>
			</footer>
		</React.Fragment>
	)
}

export default App