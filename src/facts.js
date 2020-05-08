import fetch from "isomorphic-fetch";

export default function getFacts() {
  return fetch(
    "http://www.json-generator.com/api/json/get/cfPeXvbEya?indent=2"
  ).then((res) => res.json());
}

// http://www.json-generator.com/api/json/get/cfPeXvbEya?indent=2 (mydata)
//http://www.json-generator.com/api/json/get/cqityREPFK?indent=2 (working data)
