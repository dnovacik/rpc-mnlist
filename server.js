var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var compression = require("compression");
require('dotenv').config();
var jayson = require("jayson");
var app = express();

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
    hostname: process.env.RPC_HOST,
    port: process.env.RPC_PORT,
    auth: `${process.env.RPC_USER}:${process.env.RPC_PASS}`
});

// API
app.get("/", function (req, res) {
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.setHeader("Expires", new Date(Date.now() + 86400).toUTCString());
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/coinsettings", function (req, res) {
    var coin = {
        name: process.env.COIN_NAME,
        icon: process.env.COIN_ICON_URL,
        refresh: process.env.REFRESH_TIME,
        masternodesPerPage: process.env.MASTERNODES_PER_PAGE,
        color: process.env.MAIN_COLOR
    };

    res.send(coin);
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