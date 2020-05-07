"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _facts = _interopRequireDefault(require("./facts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _facts["default"])().then(function (facts) {
  console.log(facts);
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    facts: facts
  }), document.querySelector("#root"));
})["catch"](function (err) {
  return console.log(err);
});