import React, { useEffect, useState } from "react";

import JobsFilters from "./JobFilters";
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

	// Function that allows to remove a filter
	const handleRemoveFilter = (removedFilter) => {
		if (filters.indexOf(removedFilter) >= 0) {
			setFilters(prevFilters => {
				let updaedFilters = []

				prevFilters.forEach(f => {
					if (f !== removedFilter) {
						updaedFilters.push(f)
					}
				})

				return updaedFilters
			})
		}
	}

	// Functions that allows to clear all filters
	const handleClearFilters = () => {
		setFilters([])
	}

	let filteredJobs = jobs.filter(j => {
		let pass = true
		
		// Join all filterable tags in a single array for convenience 
		let tags = [j.role, j.level, ...j.languages, ...j.tools]

		// Iterate on all filters, and check if they are all present in the current job's tags
		filters.forEach(f => {
			pass = pass && tags.indexOf(f) >= 0
		})

		return pass
	})

	return (
		<React.Fragment>
			<JobsFilters filters={filters} removeFilter={handleRemoveFilter} clearFilters={handleClearFilters}/>
			
			<JobListingsList jobs={filteredJobs} addFilter={handleAddFilter}/>
		</React.Fragment>
	)
}

export default JobListings