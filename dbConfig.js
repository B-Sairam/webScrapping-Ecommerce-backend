const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv://sairam77:08052002sai@sairam.pvjby.mongodb.net/${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}