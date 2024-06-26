module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['plugin:prettier/recommended'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
	},
}
