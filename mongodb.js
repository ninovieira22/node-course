// CRUB operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// mesma coisa do que está acima, mas desestruturado (simples) - teste
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// criar o seu próprio ID, caso seja necessário (normalmente não pq o MongoDB já faz isso automático)
const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Vikram',
    //     age: 39
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Lucas',
    //       age: 26
    //     },
    //     {
    //       name: 'Andrew',
    //       age: 27
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Clean the house',
    //       completed: true
    //     },
    //     {
    //       description: 'Renew inspection',
    //       completed: false
    //     },
    //     {
    //       description: 'Pot plants',
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) return console.log('Unable to connect do database!');
    //     console.log(result.ops);
    //   }
    // );
  }
);
