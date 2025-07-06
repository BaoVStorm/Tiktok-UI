const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    // dùng để đọc file .babelrc
    useBabelRc()
);