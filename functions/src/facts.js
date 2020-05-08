"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFacts;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFacts() {
  return (0, _isomorphicFetch["default"])("https://referral-e242d.firebaseio.com/referrals").then(function (res) {
    return res.json();
  });
} // http://www.json-generator.com/api/json/get/cfPeXvbEya?indent=2 (mydata)
//http://www.json-generator.com/api/json/get/cqityREPFK?indent=2 (working data)