/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				"poppins" : "Poppins",
				"roboto" : "Roboto Slab Variable"
			},
			colors :{
				"pinia-400" : "rgb(250 204 21)",
				"pinia-300" : "rgb(253 224 71)"
			}
		},
	},
	plugins: [],
}
