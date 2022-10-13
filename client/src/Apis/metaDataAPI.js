class MetaDataApi extends Api {
	constructor(
		year = "2018",
		team = "lakers",
		active = false,
		apiInterface = new AjaxCall()
	) {
		let url = `http://localhost:8000/players?year=${year}&team=${team}&isActive=${active}`
		super(apiInterface, url)
	}

	async getData() {
		return await this.callApi()
	}
}
