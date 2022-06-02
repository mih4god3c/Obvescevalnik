import React from "react"

export const GlobalContext = React.createContext({
	username: undefined,
	obcina: undefined,
	permissions: [],
	token: undefined,
	uid: undefined,
	update: (data) => {},
})