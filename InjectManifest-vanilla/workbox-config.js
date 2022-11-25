module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.js'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swSrc: "src/sw.js"
};