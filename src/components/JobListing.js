import React from "react";

import JobTags from "./JobTags";

// Component that display each job listing
function JobListing(props) {
	let currentJob = props.job

	return (
		<div className={"job-listing" + (currentJob.new ? " new" : "") + 
		(currentJob.featured ? " featured" : "")}>
			<div className="logo">
				<img src={currentJob.logo} alt={currentJob.company + "'s logo"} />
			</div>

			<div className="details">
				<ul className="job-header">
					<li className="company-name">{currentJob.company}</li>
					<li className="new-tag">NEW!</li>
					<li className="featured-tag">FEATURED</li>
				</ul>

				<h2 className="position">{currentJob.position}</h2>

				<ul className="info">
					<li>{currentJob.postedAt}</li>
					<li>-</li>
					<li>{currentJob.contract}</li>
					<li>-</li>
					<li>{currentJob.location}</li>
				</ul>
			</div>

			<JobTags handleAddFilter={props.handleAddFilter}
				tags={[currentJob.role, currentJob.level, ...currentJob.languages, ...currentJob.tools]}/>
		</div>
	)
}

export default JobListing