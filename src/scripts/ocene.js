export const vseckaj = (router, token, id, isLoggedIn) => {
	if (isLoggedIn) {
		return fetch("/api/glasuj/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				id: id,
				glas: "vsecek"
			}),
		})
			.then((response) => {
				if (response.status !== 200) {
					console.log(response.status)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	} else {
		return new Promise((resolve, reject) => {
			router.push("/prijava")
			resolve()
		})
	}
}

export const nevseckaj = (router, token, id, isLoggedIn) => {
	if (isLoggedIn) {
		return fetch("/api/glasuj/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				id: id,
				glas: "nevsecek"
			}),
		})
			.then((response) => {
				if (response.status !== 200) {
					console.log(response.status)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	} else {
		return new Promise((resolve, reject) => {
			router.push("/prijava")
			resolve()
		})
	}
}

export const oceni = (router, token, id, isLoggedIn, ocena) => {
	if (isLoggedIn) {
		return fetch("/api/oceni/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				id: id,
				ocena: ocena
			}),
		})
			.then((response) => {
				if (response.status !== 200) {
					console.log(response.status)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	} else {
		return new Promise((resolve, reject) => {
			router.push("/prijava")
			resolve()
		})
	}
}