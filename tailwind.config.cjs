/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			clrs: {
				nvblue: "#001f3f",
				ryblue: "#0033cc",
				dpblue: "#004488",
				mnblue: "#191970",
				white: "#ffffff"
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
}
