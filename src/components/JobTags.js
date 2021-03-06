import React from "react";

// Component that displays the list of tags on each job isting
function JobTags(props) {
	const handleTagClick = (e) => {
		e.preventDefault()

		props.addFilter(e.target.innerHTML)
	}

	return (
		<ul className="tag-list job-tags">
			{props.tags.map((t, i) => 
				<li key={i}>
					<button className="tag job-tag-button" onClick={handleTagClick}>{t}</button>
				</li>
			)}
		</ul>
	)
}

export default JobTags