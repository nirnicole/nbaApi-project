class AjaxCall {
	async getApi(url) {
		return await $.ajax({
			method: "GET",
			url: url,
			success: (result) => result,
			error: (result) => "error",
		})
	}
}
