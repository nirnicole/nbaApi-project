/*
  Author: Nir Nicole
*/
const rupgModel = function () {
	let nbaMetaInstance
	let dreamTeamInstance

	function initData(year, team, active) {
		nbaMetaInstance = new MetaDataApi(year, team, active)
		dreamTeamInstance = new DreamTeamApi()
	}

	async function getData() {
		let nbaMetaPromise = nbaMetaInstance.getData()
		return await Promise.all([nbaMetaPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}

	async function addPlayer(playerId) {
		let addedPlayerPromise = dreamTeamInstance.postData(playerId)
		return await Promise.all([addedPlayerPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}

	async function deletePlayer(playerId) {
		let addedPlayerPromise = dreamTeamInstance.deleteData(playerId)
		return await Promise.all([addedPlayerPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}
	return {
		getData,
		initData,
		addPlayer,
		deletePlayer,
	}
}
