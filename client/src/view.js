/*
  Author: Nir Nicole
  Date: 24/8/22
  M |V| C architecture:
  this is the View module.
  this script contains all of the page rendering flow,
  driven by the Controller and according to the Model(logicModule).
*/
const rupgRender = function () {
	//template method
	const renderPage = function (res) {
		console.log(res)
		renderComponent("#example-template", "#results", res.metaDate)
		appandImg(res.metaDate)
	}

	const renderComponent = function (hbTemplate, elementToRender, data) {
		const source = $(hbTemplate).html()
		const template = Handlebars.compile(source)
		let newHTML = template({ playersData: data })
		$(elementToRender).empty()
		$(elementToRender).append(newHTML)
	}

	const appandImg = function (data) {
		for (player of data) {
			console.log(player.img)
			$(`#${player.id}`).append(
				`<img src=${player.img} onerror="this.src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';" alt="not found" />`
			)
		}
	}
	return {
		renderPage,
		renderComponent,
	}
}
