import React from "react";

// Component that displays the list of tags on each job isting
function JobTags(props) {
	return (
		<ul className="tags">
			{props.tags.map((t, i)=> <li onClick={props.handleAddFilter} key={i}>{t}</li>)}
		</ul>
	)
}

export default JobTags