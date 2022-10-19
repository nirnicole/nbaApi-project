class PlayerStatsApi extends Api {
	constructor(apiInterface = new AjaxCall()) {
		super(apiInterface, `http://localhost:8000/playerstats/`)
	}

	async getData(lname, fname) {
		this.resources = `${lname}/${fname}`
		return await this.callApi()
	}
}
