import "../styles/globals.css"
import Head from "next/head"
import { useRef, useState } from "react"
import { GlobalContext } from "../config/context"
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { cacheUserData, signOut } from "../scripts/user"

const firebaseConfig = {
	apiKey: "AIzaSyCRDoaXl6F4u_vkOXIqf79QLtQLy9zp-o0",
	authDomain: "tpo-skupina-24.firebaseapp.com",
	projectId: "tpo-skupina-24",
	storageBucket: "tpo-skupina-24.appspot.com",
	messagingSenderId: "30111198436",
	appId: "1:30111198436:web:bd2e46dd9d796931d390f1",
}
initializeApp(firebaseConfig)

function MyApp({ Component, pageProps }) {
	const auth = getAuth()

	const isProcessing = useRef(false)
	const [state, setState] = useState({
		username: undefined,
		obcina: undefined,
		permissions: [],
		token: undefined,
		uid: undefined,
		update,
	})

	function update(data) {
		setState(Object.assign({}, state, data))
	}

	onAuthStateChanged(auth, (user) => {
		if (user && !state.token && !isProcessing.current) {
			isProcessing.current = true
			cacheUserData(auth.currentUser, state)
				.catch((error) => {
					console.error(error)
					try {
						signOut(auth)
					} catch {}
				})
				.finally(() => {
					isProcessing.current = false
				})
		} else if (!user && state.token) {
			state.update({
				...state,
				username: undefined,
				obcina: undefined,
				permissions: [],
				token: undefined,
				uid: undefined,
			})
		}
	})

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalContext.Provider value={state}>
				<Component {...pageProps} />
			</GlobalContext.Provider>
			{/* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
      ></script> */}
		</>
	)
}

export default MyApp
