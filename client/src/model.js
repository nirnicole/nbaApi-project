/*
  Author: Nir Nicole
*/
const rupgModel = function () {
	let nbaMetaInstance

	function initData(year, team) {
		nbaMetaInstance = new MetaDataApi(year, team)
	}

	async function getData() {
		let nbaMetaPromise = nbaMetaInstance.getData()
		return await Promise.all([nbaMetaPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}

	return {
		getData,
		initData,
	}
}
