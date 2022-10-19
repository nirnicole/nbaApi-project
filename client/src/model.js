/*
  Author: Nir Nicole
*/
const rupgModel = function () {
	let nbaMetaInstance
	let dreamTeamInstance
	let showStatsInstance
	let cacheData

	function getCache() {
		return cacheData
	}

	function initData(year = 2020, team = "lakers", active = false) {
		nbaMetaInstance = new MetaDataApi(year, team, active)
	}

	function initDreamTeam() {
		dreamTeamInstance = new DreamTeamApi()
	}

	function initShowStats() {
		showStatsInstance = new PlayerStatsApi()
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

	async function deletePlayer(playerId) {
		let addedPlayerPromise = dreamTeamInstance.deleteData(playerId)
		return await Promise.all([addedPlayerPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}

	async function showStats(playerLname, playeFname) {
		let showStatsPromise = showStatsInstance.getData(
			playerLname,
			playeFname
		)
		return await Promise.all([showStatsPromise]).then(function (results) {
			return { metaData: results[0] }
		})
	}

	return {
		getCache,
		getData,
		initData,
		initDreamTeam,
		initShowStats,
		addPlayer,
		deletePlayer,
		showStats,
	}
}
