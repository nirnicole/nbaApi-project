class exampleApi extends Api {
	constructor(apiInterface = new AjaxCall(), url = "http://localhost:8000/") {
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
