/*
  Author: Nir Nicole
*/
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
	year = $("#year").val()
	team = $("#team").val()
	if (year != "" && team != "") {
		model.initData(year, team)
		generateData()
	} else console.warn("no input")
})

$("body").bind("keypress", function (event) {
	if (event.keyCode === 13) {
		$("#submit").trigger("click")
	}
})
