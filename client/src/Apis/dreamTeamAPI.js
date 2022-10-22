class DreamTeamApi extends Api {
	constructor(apiInterface = new AjaxCall()) {
		super(apiInterface, `http://localhost:8000/dreamTeam/`)
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
		this.resources = data
		return await this.callApi(0, data)
	}
}
