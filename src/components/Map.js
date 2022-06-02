import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

export default function Map({ location, mapCenter, setAddress, setLocation, isEnabled }) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	})

	const onClick = (e) => {
		locationToAddress(e.latLng.lat(), e.latLng.lng())
	}

	const locationToAddress = (lat, lng) => {
		fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
			.then((response) => {
				if (response.status == 200) {
					return response.json()
				} else {
					console.log(response.status)
				}
			})
			.then((data) => {
				setAddress(data.results[0].formatted_address)
				setLocation({ lat, lng })
			})
	}

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={{
				width: "100%",
				height: "100%",
			}}
			center={mapCenter}
			zoom={7}
			onClick={isEnabled ? onClick : () => {}}
		>
			{location.lat && location.lng && (
				<Marker position={{ lat: location.lat, lng: location.lng }} />
			)}
		</GoogleMap>
	) : (
		<></>
	)
}
