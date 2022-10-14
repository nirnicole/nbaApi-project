/*
  Author: Nir Nicole
*/
const rupgModel = function () {
	let nbaMetaInstance
	let dreamTeamInstance
	let cacheData

	function getCache() {
		return cacheData
	}

	function initData(year = 2020, team = "lakers", active = false) {
		nbaMetaInstance = new MetaDataApi(year, team, active)
		dreamTeamInstance = new DreamTeamApi()
	}

	async function getData(dreamTeam = false) {
		let promise = dreamTeam
			? dreamTeamInstance.getData()
			: nbaMetaInstance.getData()
		return await Promise.all([promise]).then(function (results) {
			cacheData = results[0]
			return { metaData: results[0] }
		})
	}

	async function addPlayer(playerData) {
		let addedPlayerPromise = dreamTeamInstance.postData(playerData)
		return await Promise.all([addedPlayerPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}

	async function deletePlayer(playerData) {
		let addedPlayerPromise = dreamTeamInstance.deleteData(playerData)
		return await Promise.all([addedPlayerPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}
	return {
		getCache,
		getData,
		initData,
		addPlayer,
		deletePlayer,
	}
}
