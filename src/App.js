import React from "react"

import JobListings from "./components/JobListings"

function App() {
	return (
		<React.Fragment>
			<div className="bg-header">
				<img src="./images/bg-header-desktop.svg" alt=""/>
			</div>

			<div className="container">
				<JobListings/>
			</div>	
		</React.Fragment>
	)
}

export default App