class NbaImgsApi extends Api {
	constructor(
		lname = "james",
		fname = "lebron",
		apiInterface = new AjaxCall(),
		url = "http://localhost:8000/player-img"
	) {
		url = `${url}?lname=${lname}&fname=${fname}`
		super(apiInterface, url)
	}

	async getData() {
		//proccesing
		let resolvedPromise = await this.callApi()
		return resolvedPromise
	}
}
