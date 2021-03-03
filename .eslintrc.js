module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
	  	"eqeqeq": "warn",
		"strict": "warn",
		"no-alert": "error",
		"no-implicit-global": "warn",
		"no-else-return": "warn",
		"indent": ["error", "space"],
		"quotes": ["warn", "single"]
  },
};
