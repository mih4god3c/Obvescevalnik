export const cacheUserData = (user, global) => {
	console.log("Refreshing user data...")
	return user.getIdToken().then((token) => {
		fetch("/api/prijava", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error(response.status)
				}
			})
			.then((data) => {
				if (data.data) {
					global.update({
						...global,
						username: data.data.username,
						obcina: data.data.obcina.name,
						permissions: data.data.permissions,
						token,
						uid: user.uid
					})
				}
			})
		})
}