import React, { useEffect, useState } from "react";

import getData from "../services/getData";

// Component that displays the list of available jobs
function JobListingsList() {
	// State variable containing all jobs listings
	const [jobs, setJobs] = useState([])

	// When the component mounts, get the jobs data  
	useEffect(() => {
		getData().then(data => {
			setJobs(data)
		})
	}, [])
	
	return jobs.map(j => <p key={j.id}>{j.position}</p>)
}

export default JobListingsList