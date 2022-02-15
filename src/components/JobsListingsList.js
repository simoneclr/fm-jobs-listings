import React, { useEffect, useState } from "react";

import JobListing from "./JobListing";

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
	
	return jobs.map(j => <JobListing key={j.id} job={j}/>)
}

export default JobListingsList