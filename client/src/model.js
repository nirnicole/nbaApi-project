/*
  Author: Nir Nicole
  Date: 07/09/22
  |M| V C architecture:
  this is the Model module.
  this script contains all of the page data,
  driven by the Controller and used by the View(renderModule).
*/
const rupgModel = function () {
	let nbaMetaInstance = new MetaDataApi()

	function init_data(year, team) {
		nbaMetaInstance = new MetaDataApi(year, team)
	}

	async function getData() {
		let nbaMetaPromise = nbaMetaInstance.getData()
		return await Promise.all([nbaMetaPromise]).then(function (results) {
			return { metaDate: results[0] }
		})
	}

	return {
		getData,
		init_data,
	}
}
