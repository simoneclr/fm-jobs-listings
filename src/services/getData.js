// Function that fetches the data from the providedjson file
const getData = () => {
	return fetch("./data/data.json", {
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(response => {
		return response.json()
	})
}

export default getData