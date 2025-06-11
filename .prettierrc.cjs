module.exports = {
  arrowParens: "avoid",
  singleQuote: true,
  printWidth: 100,
  proseWrap: "never",
  endOfLine: "lf",
  trailingComma: "all",
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-css-order"],
  overrides: [
    {
      files: ".*rc",
      options: {
        parser: "json",
      },
    },
  ],
};
