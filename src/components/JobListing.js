import React from "react";

import JobTags from "./JobTags";

function JobListing(props) {
	let currentJob = props.job

	return (
		<div className="job-listing">
			<div className="logo">
				<img src={currentJob.logo} alt={currentJob.company + "'s logo"} />
			</div>

			<div className="details">
				<p className="company-name">{currentJob.company}</p>

				<h2 className="position">{currentJob.position}</h2>

				<ul className="info">
					<li>{currentJob.postedAt}</li>
					<li>-</li>
					<li>{currentJob.contract}</li>
					<li>-</li>
					<li>{currentJob.location}</li>
				</ul>
			</div>

			<JobTags tags={[currentJob.role, currentJob.level, ...currentJob.languages, ...currentJob.tools]}/>
		</div>
	)
}

export default JobListing