module.exports = {
	// Run typecheck on changes to TypeScript files
	'**/*.ts?(x)': () => 'yarn typecheck',
	// Run ESLint on changes to JavaScript/TypeScript files
	'**/*.(ts|js)?(x)': (filenames) => `yarn lintfix ${filenames.join(' ')}`,
}