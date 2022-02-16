import React from "react";

function JobTags(props) {
	return (
		<ul className="tags">
			{props.tags.map((t, i)=> <li key={i}>{t}</li>)}
		</ul>
	)
}

export default JobTags