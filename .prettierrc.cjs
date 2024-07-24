/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  bracketSpacing: true,
  tabWidth: 2,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
