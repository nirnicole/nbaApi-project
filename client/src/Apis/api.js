/*
this is the parent class of all api classes.
every structual change will be made here and be inherited to each api class (see the error handeling for example).
note that each api will also implement its uniqe data proccess according to its destination api.
by default, all api calls are now a "GET" call.
*/
class Api {
	url = ""
	method = ""
	proccesedData
	callerInteface

	constructor(callerInteface, url, method = "GET") {
		this.callerInteface = callerInteface //dependancy injection
		this.url = url
		this.method = method
	}

	async callApi(attempts = 0) {
		return await this.callerInteface.getApi(this.url).catch((error) => {
			this.errorHandeler(this.callApi, attempts)
		})
	}

	errorHandeler(method, attempts) {
		if (attempts++ < 3) {
			console.warn(`error in : ${this.constructor.name} \n
                        Attampts left: ${3 - attempts}\n
                        trying again...`)
			return method(attempts)
		} else {
			console.log(`attampet limit reached, please check whats wrong`)
		}
	}

	processData(rawData) {
		this.proccesedData = rawData
		return this
	}
}
