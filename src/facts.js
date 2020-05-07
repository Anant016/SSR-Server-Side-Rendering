import fetch from "isomorphic-fetch";

export default function getFacts() {
  return fetch(
    "http://www.json-generator.com/api/json/get/cqityREPFK?indent=2"
  ).then((res) => res.json());
}
