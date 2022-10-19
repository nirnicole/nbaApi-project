class AjaxCall {
	async getApi(
		url,
		method = "GET",
		data = { "data": "empty" },
		resourcses = ""
	) {
		let ajaxData = {
			url: url + resourcses,
			success: (result) => result,
			error: (result) => "error",
			type: method,
		}
		if (method != "GET") {
			ajaxData["dataType"] = "json"
			ajaxData["data"] = JSON.stringify(data)
			ajaxData["contentType"] = "application/json"
		}
		return await $.ajax(ajaxData)
	}
}
