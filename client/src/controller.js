/*
  Author: Nir Nicole
*/

const model = rupgModel()
const renderer = rupgRender()

Handlebars.registerHelper("chooseClass", (isDT) => (isDT ? "dt-item" : "item"))
Handlebars.registerHelper("dreamOptions", (isDT) =>
	isDT ? "Remove from Dream Team" : "Add to Dream Team"
)

const generateData = function (attempts = 5, dreamTeam = false) {
	model
		.getData(dreamTeam)
		.then((res) => renderer.renderResults(res))
		.catch((error) => errorHandeling(error, attempts, generateData))
}

$("#submit").on("click", function () {
	let year = $("#year").val()
	let team = $("#team").val()
	let active = $("#is-active").is(":checked")
	if (year != "" && team != "") {
		model.initData(year, team, active)
		generateData()
	} else console.warn("no input")
})

$("body").bind("keypress", function (event) {
	if (event.keyCode === 13) {
		$("#submit").trigger("click")
	}
})

$("#dream-team").on("click", function () {
	model.initDreamTeam()
	generateData(5, true)
})

$("#results").on("click", ".dreamteam-card-button", function () {
	let isDreamTeam = $(this).parent("div").attr("data-dt")
	let player_id = $(this).parent("div").attr("data-id")
	let player_data = model.getCache().find((p) => p.id == player_id)
	model.initDreamTeam()

	if (String(isDreamTeam).toLowerCase() == "true") {
		model
			.deletePlayer(player_id)
			.then((res) => renderer.renderCard(player_id, res.metaData))
	} else {
		model
			.addPlayer(player_data)
			.then((res) => renderer.renderCard(player_id, res.metaData))
	}
})

$("#results").on("click", ".stats-button", function () {
	let player_card = $(this).parent("div")
	let isShown = player_card.find(".img").attr("data-stats")
	let player_id = player_card.attr("data-id")
	let player_data = model.getCache().find((p) => p.id == player_id)
	model.initShowStats()

	if (String(isShown).toLowerCase() == "false") {
		player_card
			.find(".img")
			.find(".player-stats-hide")
			.attr("class", "player-stats-show")
		player_card.find(".img").attr("data-stats", "true")
		model.showStats(player_data.lname, player_data.fname).then((res) => {
			renderer.renderStats(player_id, res)
			return res
		})
	} else {
		player_card
			.find(".img")
			.find(".player-stats-show")
			.attr("class", "player-stats-hide")
		player_card.find(".img").attr("data-stats", "false")
	}
})

let errorHandeling = function (error, attempts, callback) {
	console.warn(error)
	if (attempts-- > 0) {
		console.warn(`coudlnt load user.\n
			Attampts left: ${attempts}\n
			trying again...`)
		callback(attempts)
	} else {
		console.log(`attampet limit reached, please check whats wrong`)
	}
}
