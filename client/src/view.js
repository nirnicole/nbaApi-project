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
		renderComponent("#example-template", ".resluts", res.example)
	}

	const renderComponent = function (hbTemplate, elementToRender, data) {
		const source = $(hbTemplate).html()
		const template = Handlebars.compile(source)
		let newHTML = template(data)
		$(elementToRender).empty()
		$(elementToRender).append(newHTML)
	}

	return {
		renderPage,
		renderComponent,
	}
}
