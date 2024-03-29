var prettierConf = require('./prettier.config.js');

module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error', prettierConf],
    'import/no-unresolved': [2, { caseSensitive: false }],

    // But we want the following
    'no-multi-spaces': ['error', { exceptions: { ImportDeclaration: true } }],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': ['error', { args: 'none' }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    'import/no-extraneous-dependencies': 0, // Needed for tests
    // 'no-mixed-operators': 'error', // Wish we can put it back with prettier

    'react/prefer-stateless-function': 'off',

    // Not for us
    'jsx-a11y/label-has-for': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'prefer-destructuring': 0, // Can have unwanted side effect
    'react/jsx-filename-extension': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/anchor-is-valid': 0,

    // Introduced with new eslint
    // and no time to fix them...
    // [...]
    'linebreak-style': 0,
    'no-useless-escape': 0,
    'no-nested-ternary': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'prefer-promise-reject-errors': 0,
    'react/no-multi-comp': [false],
  },
  plugins: ['prettier'],
  globals: {
    __BASE_PATH__: false,
    VRFrameData: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  env: {
    browser: true,
  },
};
