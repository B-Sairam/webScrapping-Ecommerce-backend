const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv://sairam77:Sairam2002@sairam.pvjby.mongodb.net/${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
