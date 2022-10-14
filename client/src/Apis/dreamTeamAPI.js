class DreamTeamApi extends Api {
	constructor(
		year = "2018",
		team = "lakers",
		active = false,
		apiInterface = new AjaxCall()
	) {
		let url = `http://localhost:8000/dreamTeam/`
		super(apiInterface, url)
	}

	async getData() {
		return await this.callApi()
	}

	async postData(data = "") {
		this.method = "POST"
		return await this.callApi(0, data)
	}

	async deleteData(data = "") {
		this.method = "DELETE"
		return await this.callApi(0, data)
	}
}
