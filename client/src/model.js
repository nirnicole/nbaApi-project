/*
  Author: Nir Nicole
  Date: 07/09/22
  |M| V C architecture:
  this is the Model module.
  this script contains all of the page data,
  driven by the Controller and used by the View(renderModule).
*/
const rupgModel = function () {
	let exampleInstance = new exampleApi()

	async function getData() {
		let examplePromise = exampleInstance.getData()

		return await Promise.all([examplePromise]).then(function (results) {
			return {
				example: exampleInstance.processData(results[0]),
			}
		})
	}
	return {
		getData,
	}
}
