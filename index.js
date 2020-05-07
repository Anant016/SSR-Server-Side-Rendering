import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "./src/App";
import getFacts from "./src/facts";
import express from "express";
import fs from "fs";

const index = fs.readFileSync(__dirname + "/index.template.html", "utf8");

const app = express();
app.get("**", (req, res) => {
  getFacts().then((facts) => {
    getFacts().then((facts) => {
      const html = renderToString(<App facts={facts} />);
      const finalHtml = index.replace("<!-- ::::::::APP:::::: -->", html);
      //cdn
      res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
      res.send(finalHtml);
    });
  });
});

export let ssrapp = functions.https.onRequest(app);
