import React from "react";

// Component that displays the list of tags on each job isting
function JobTags(props) {
	const handleTagClick = (e) => {
		e.preventDefault()

		props.addFilter(e.target.innerHTML)
	}

	return (
		<ul className="tags">
			{props.tags.map((t, i) => 
				<li>
					<button onClick={handleTagClick} key={i}>{t}</button>
				</li>
			)}
		</ul>
	)
}

export default JobTags