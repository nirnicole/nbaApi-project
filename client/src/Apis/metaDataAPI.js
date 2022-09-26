class MetaDataApi extends Api {
	constructor(year = "2018", team = "lakers", apiInterface = new AjaxCall()) {
		let url = `http://localhost:8000/players?year=${year}&team=${team}`
		super(apiInterface, url)
	}

	async getData() {
		return await this.callApi()
	}
}
