module.exports = {
    env: {
        browser: true,
        'react-native/react-native': true,
        es2020: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'airbnb',
    ],
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'none',
    semi: false,
    endOfLine: 'lf',
    bracketSpacing: true,
    arrowParens: 'avoid',
    rules: {
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'comma-dangle': ['error', 'never'],
    },
};
