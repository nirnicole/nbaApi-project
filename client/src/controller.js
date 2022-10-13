/*
  Author: Nir Nicole
*/
class UserRequest {
	constructor(year = 2020, team = "Lakers", isActive = false) {
		this.year = year
		this.team = team
		this.isActive = isActive
	}
}

const model = rupgModel()
const renderer = rupgRender()

const generateData = function (attempts = 0) {
	model
		.getData()
		.then((res) => {
			renderer.renderPage(res)
			return res
		})
		.catch((error) => {
			console.log(error)
			if (attempts++ < 3) {
				console.warn(`coudlnt load user.\n
                Attampts left: ${3 - attempts}\n
                trying again...`)
				generateData(attempts)
			} else {
				console.log(`attampet limit reached, please check whats wrong`)
			}
		})
}

$("#submit").on("click", function () {
	console.log("working")
	let year = $("#year").val()
	let team = $("#team").val()
	let active = $("#is-active").is(":checked")
	if (year != "" && team != "") {
		// let request = new UserRequest(year, team, active)
		model.initData(year, team, active)
		generateData()
	} else console.warn("no input")
})

$("body").bind("keypress", function (event) {
	if (event.keyCode === 13) {
		$("#submit").trigger("click")
	}
})

$("#results").on("click", "button", function () {
	let isDreamTeam = $(this).parent("div").attr("data-dt")
	if (String(isDreamTeam).toLowerCase() == "true") {
		//send delete api
		model.deletePlayer($(this).parent("div").attr("data-id"))
		$(this).parent("div").attr("class", "item")
		$(this).text("Add to dreamTeam")
		$(this).parent("div").attr("data-dt", "false")
	} else {
		//send post api
		model.addPlayer($(this).parent("div").attr("data-id"))
		$(this).parent("div").attr("class", "dt-item")
		$(this).text("Remove from dreamTeam")
		$(this).parent("div").attr("data-dt", "true")
	}
})
