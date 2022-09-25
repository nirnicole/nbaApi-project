class exampleApi extends Api {
	constructor(
		year = "2018",
		team = "lakers",
		apiInterface = new AjaxCall(),
		url = "http://localhost:8000/players"
	) {
		url = `${url}?year=${year}&team=${team}`
		super(apiInterface, url)
	}

	//overriden
	async getData() {
		//proccesing
		let resolvedPromise = await this.callApi()
		return resolvedPromise
	}

	//overriden
	processData(rawData) {
		this.proccesedData = { data: rawData }
		return this.proccesedData
	}
}
