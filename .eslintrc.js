module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['jsdoc', 'jest', 'node'],
  extends: ['airbnb-base', 'prettier', 'plugin:jsdoc/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  rules: {
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          MethodDefinition: true,
        },
        checkConstructors: true,
      },
    ],
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns': 0,
  },
};
