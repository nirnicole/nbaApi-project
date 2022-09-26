/*
  Author: Nir Nicole
*/
const rupgRender = function () {
	const renderPage = function (res) {
		console.log(res)
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
			let newHTML = `<img src=${player.img} onerror="this.src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';" alt="not found" />`
			$(elementToRender).empty()
			$(elementToRender).append(newHTML)
		}
	}
	return {
		renderPage,
		renderComponent,
		appandImgs,
	}
}
