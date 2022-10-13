class AjaxCall {
	async getApi(url, method = "GET", data = { "data": "empty" }) {
		return await $.ajax({
			url: url,
			success: (result) => result,
			error: (result) => "error",
			type: method,
			dataType: "json",
			data: JSON.stringify(data),
			contentType: "application/json",
		})
	}
}
