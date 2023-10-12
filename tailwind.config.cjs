/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		screens: {
			'phone': '375px',
			'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
		},
		backgroundImage: {
			'pages': "url('/pages.jpg')",
		},
	},
	plugins: [],
}
