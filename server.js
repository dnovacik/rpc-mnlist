var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var compression = require("compression");
var jayson = require("jayson");
var app = express();

// COIN CFG
const { coin } = require("./src/config/config");

// Body Parser Middleware
app.use(bodyParser.json());

// Compression
app.use(compression());
app.use(express.static(path.join(__dirname, "build"), {
    maxage: "1d"
}));

//CORS Middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

// RPC
var rpcClient = jayson.client.http({
    hostname: coin.rpchost,
    port: coin.rpcport,
    auth: `${coin.rpcuser}:${coin.rpcpass}`
});

// API
app.get("/", function (req, res) {
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.setHeader("Expires", new Date(Date.now() + 86400).toUTCString());
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/getcoininfo", function (req, res) {
    rpcClient.request("getinfo", function (err, response) {
        if (err) {
            res.send(err);
        } else {
            res.send(response.result);
        }
    });
});

app.get("/getmasternodelist", function (req, res) {
    rpcClient.request("masternode", ["list"], function (err, response) {
        if (err) {
            res.send(err);
        } else {
            res.send(response.result)
        }
    });
});

var server = app.listen(process.env.PORT || 4000, function () {
    var port = server
        .address()
        .port;
    console.log("App now running on port", port);
});