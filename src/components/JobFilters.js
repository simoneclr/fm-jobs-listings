import React from "react";

// Component that displays the currently selected filters and allows to remove them
function JobsFilters(props) {
	const handleClick = (e) => {
		e.preventDefault()

		if (e.target.id === "clear-filters") {
			props.clearFilters()
		} else {
			props.removeFilter(e.target.innerHTML)
		}
	} 

	return (
		<div className="filters-menu">
			<ul className="active-filters">
				{props.filters.map((f, i) => 
					<li key={i}>
						<button onClick={handleClick}>{f}</button>
					</li>)}
			</ul>

			{/*
				If there's at least one active filter, display clear button
				JS evaluates the first expression, if it's true, it evaluates the second 
				(which displays the button), otherwise the second is ignored (i.e. the button is not displayed)
			*/}
			{props.filters.length > 0 && (
				<button onClick={handleClick} id="clear-filters">Clear</button>
			)}
		</div>
	)
}

export default JobsFilters