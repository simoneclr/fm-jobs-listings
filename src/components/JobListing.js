import React from "react";

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

			{/* TODO: Move to own component */}
			<ul className="tags">
				<li>tag</li>
				<li>tag</li>
				<li>tag</li>
			</ul>
		</div>
	)
}

export default JobListing