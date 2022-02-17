import React from "react";

import JobListing from "./JobListing";

// Component that displays the list of available jobs
function JobListingsList(props) {
	return props.jobs.map(j => <JobListing key={j.id} job={j} addFilter={props.addFilter}/>)
}

export default JobListingsList