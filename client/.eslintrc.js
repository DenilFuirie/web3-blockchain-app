module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:import/recommended",
    'airbnb-typescript',
  ],
  settings: {
    "import/extensions": [".js", ".mjs", ".jsx", ".js", ".jsx", ".ts", ".tsx"]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'linebreak-style': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/static-property-placement': 0,
    'import/no-named-as-default-member': 0,
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/export': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    semi: 2,
    'comma-dangle': 2,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/keyword-spacing': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-explicit-any': 2,
    'object-curly-spacing': 2,
    'no-console': 1,
    'react/jsx-props-no-spreading': 0,
  },
};