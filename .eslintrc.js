module.exports = {
  // Umi 项目
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
