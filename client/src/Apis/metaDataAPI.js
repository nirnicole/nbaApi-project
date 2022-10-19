class MetaDataApi extends Api {
	constructor(
		year = "2018",
		team = "lakers",
		active = false,
		apiInterface = new AjaxCall()
	) {
		super(apiInterface, `http://localhost:8000/`)
		this.resources = `players?year=${year}&team=${team}&isActive=${active}`
	}

	async getData() {
		return await this.callApi()
	}
}
