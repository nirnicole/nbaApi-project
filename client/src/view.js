/*
  Author: Nir Nicole
*/
const rupgRender = function () {
	const renderPage = function (res) {
		dreamteamHB()
		dreamOptionsHB()
		renderComponent("#example-template", "#results", res.metaData)
		appandImgs(res.metaData)
	}

	const renderComponent = function (hbTemplate, elementToRender, metaData) {
		const source = $(hbTemplate).html()
		const template = Handlebars.compile(source)
		let newHTML = template({ playersData: metaData })
		$(elementToRender).empty()
		$(elementToRender).append(newHTML)
	}

	const appandImgs = function (metaData) {
		for (player of metaData) {
			let elementToRender = `#${player.id}`
			renderComponent("#imgs-template", elementToRender, player)
		}
	}

	const renderStats = function (pid, data) {
		let elementToRender = `#stats${pid}`
		renderComponent("#stats-template", elementToRender, data.metaData)
	}

	const dreamteamHB = function () {
		Handlebars.registerHelper("chooseClass", (isDT) =>
			isDT ? "dt-item" : "item"
		)
	}

	const dreamOptionsHB = function () {
		Handlebars.registerHelper("dreamOptions", (isDT) =>
			isDT ? "Remove from Dream Team" : "Add to Dream Team"
		)
	}

	return {
		renderPage,
		renderComponent,
		appandImgs,
		renderStats,
	}
}
