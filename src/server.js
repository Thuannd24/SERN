import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoute from "./route/web.js";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
dotenv.config();
let app = express();
//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoute(app);
connectDB();
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Backend nodejs is running on the port: " + port);
});
