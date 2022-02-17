import React from "react";

import JobListing from "./JobListing";

// Component that displays the list of available jobs
function JobListingsList(props) {

	return props.jobs.filter(j => {
		let pass = true
		
		// Join all filterable tags in a single array for convenience 
		let tags = [j.role, j.level, ...j.languages, ...j.tools]

		// Iterate on all filters, and check if they are all present in the current job's tags
		props.filters.forEach(f => {
			pass = pass && tags.indexOf(f) >= 0
		})

		return pass
	}).map(j => <JobListing key={j.id} job={j} addFilter={props.addFilter}/>)
}

export default JobListingsList