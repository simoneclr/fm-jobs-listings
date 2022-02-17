import React, { useEffect, useState } from "react";

import JobListingsList from "./JobsListingsList";

import getData from "../services/getData";

// Main component of the app
function JobListings() {
	// State variable containing all jobs listings
	const [jobs, setJobs] = useState([])

	// State variable containing the list of active filters
	const [filters, setFilters] = useState([])

	// When the component mounts, get the jobs data  
	useEffect(() => {
		getData().then(data => {
			setJobs(data)
		})
	}, [])
	
	// Function that allows to add a new filter
	const handleAddFilter = (newFilter) => {
		if (filters.indexOf(newFilter) < 0) {
			setFilters(prevFilters => [...prevFilters, newFilter])
		}
	}

	return <JobListingsList jobs={jobs} filters={filters} addFilter={handleAddFilter}/>
}

export default JobListings