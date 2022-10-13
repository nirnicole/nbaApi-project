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
		console.log(data)
		this.method = "POST"
		console.log(this)
		return await this.callApi(0, { "data": data })
	}

	async deleteData(data = "") {
		console.log(data)
		this.method = "DELETE"
		console.log(this)
		return await this.callApi(0, { "data": data })
	}
}
