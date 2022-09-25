/*
  Author: Nir Nicole
  Date: 24/8/22
  M V |C| architecture:
  this is the Controller module.
  this script contains all of the page integrating flow, it takes data from the model and render it threw the view.
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
		model.init_data(year, team)
		generateData(year, team)
	} else console.warn("no input")
})
