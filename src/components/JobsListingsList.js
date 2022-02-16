import React, { useEffect, useState } from "react";

import JobListing from "./JobListing";

import getData from "../services/getData";

// Component that displays the list of available jobs
function JobListingsList() {
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
	const handleAddFilter = (e) => {
		e.preventDefault();

		let newFilter = e.target.innerHTML

		if (filters.indexOf(newFilter) < 0) {
			setFilters(prevFilters => [...prevFilters, newFilter])
		}
	}

	return jobs.filter(j => {
		let pass = true
		
		// Join all filterable tags in a single array for convenience 
		let tags = [j.role, j.level, ...j.languages, ...j.tools]

		// Iterate on all filters, and check if they are all present in the current job's tags
		filters.forEach(f => {
			pass = pass && tags.indexOf(f) >= 0
		})

		return pass
	}).map(j => <JobListing key={j.id} job={j} handleAddFilter={handleAddFilter}/>)
}

export default JobListingsList