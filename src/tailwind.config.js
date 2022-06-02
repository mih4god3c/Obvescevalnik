module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			minHeight: {
				"screen-1/2": "50vh",
			},
			backgroundImage: {
				"hero-pattern": "url('../img/hero-pattern.jpg')",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
